module.exports = function (app, mysql){
    app.post('/menetrend_alapjan_lekerdezes', function(request, response, next){

        const { indulasi_hely, erkezesi_hely, kezdo_indulasi_ido } = request.body;
        if(indulasi_hely === null || erkezesi_hely === null || kezdo_indulasi_ido === null) return;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });

        let time = kezdo_indulasi_ido.split(':');
        let hour = parseInt(time[0]);
        let minute = parseInt(time[1]);

        db.connect();
        db.query(`SELECT line_names.name AS JaratID,
        ABS(arriving_erkezes.arrival - arriving_indulas.arrival) AS Menetido,
        arriving_indulas.arrival AS Indulasi_ido_percben,
        arriving_erkezes.arrival AS Erkezesi_ido_percben,
        ABS(line_stops_indulas.stop_number - line_stops_erkezes.stop_number) AS Megallok_szama,
        users_favouriteLines.line AS saved
        FROM line_names
        LEFT OUTER JOIN stops AS indulas_stops ON indulas_stops.name LIKE ?
        LEFT OUTER JOIN stops AS erkezes_stops ON erkezes_stops.name LIKE ?
        LEFT OUTER JOIN line_stops AS line_stops_indulas ON line_stops_indulas.line = line_names.id AND line_stops_indulas.stop = indulas_stops.id
        LEFT OUTER JOIN line_stops AS line_stops_erkezes ON line_stops_erkezes.line = line_names.id AND line_stops_erkezes.stop = erkezes_stops.id
        LEFT OUTER JOIN arriving AS arriving_indulas ON arriving_indulas.line_stop_id = line_stops_indulas.id
        LEFT OUTER JOIN arriving AS arriving_erkezes ON arriving_erkezes.line_stop_id = line_stops_erkezes.id
        LEFT OUTER JOIN users_favouriteLines ON users_favouriteLines.line = line_names.id AND users_favouriteLines.username = ?
        WHERE line_stops_indulas.line = line_stops_erkezes.line`, 
        [indulasi_hely, erkezesi_hely, request.session.username], (error, data) => {
            if(error || data.length === 0){
                response.send(error);
                db.end();
                next();
                return;
            }

            let return_value = [];

            for (let i = 0; i < data.length; i++) {
                for (let h = hour; h < 24; h++) {
                    let h_indulas = h;
                    let h_erkezes = data[i].Erkezesi_ido_percben <= data[i].Indulasi_ido_percben ? h+1 : h;
                    if(h_erkezes === 24) h_erkezes = 0;

                    return_value.push({
                        "JaratID": data[i].JaratID,
                        "Menetido": parseInt(data[i].Menetido),
                        "Indulasi_ido": h_indulas + ':' + data[i].Indulasi_ido_percben,
                        "Erkezesi_ido": h_erkezes + ':' + data[i].Erkezesi_ido_percben,
                        "Megallok_szama": parseInt(data[i].Megallok_szama),
                        "saved": data[i].saved
                    });
                }
            }
            window.location.href = '/';
            response.send(return_value);
            db.end();
            next();

        });

        //time tipussa
        /*
        db.query(`SELECT line_names.name AS JaratID,
        ABS(TIMEDIFF(arriving_indulas.arrival, arriving_erkezes.arrival)) AS Menetido,
        arriving_indulas.arrival AS Indulasi_ido, arriving_erkezes.arrival AS Erkezesi_ido,
        ABS(line_stops_indulas.stop_number - line_stops_erkezes.stop_number) AS Megallok_szama,
        users_favouriteLines.line AS saved
        FROM line_names
        LEFT OUTER JOIN line_stops AS line_stops_indulas ON line_stops_indulas.line = line_names.id AND line_stops_indulas.stop = ?
        LEFT OUTER JOIN line_stops AS line_stops_erkezes ON line_stops_erkezes.line = line_names.id AND line_stops_erkezes.stop = ?
        LEFT OUTER JOIN arriving AS arriving_indulas ON arriving_indulas.line_stop_id = line_stops_indulas.id
        LEFT OUTER JOIN arriving AS arriving_erkezes ON arriving_erkezes.line_stop_id = arriving_erkezes.id
        LEFT OUTER JOIN users_favouriteLines ON users_favouriteLines.line = line_names.id AND users_favouriteLines.username = ?
        WHERE line_stops_indulas.line = line_stops_erkezes.line AND arriving_indulas.arrival >= ?`, 
        [indulasi_hely, erkezesi_hely, request.session.username, kezdo_indulasi_ido], (error, data) => {
            if(error){
                                response.send(error);
                                db.end();
                                next();
                                return;
            }
            response.send(data);
            db.end();
            next();
        });
        */

    });
    app.post('/kedvenc_jarat_hozzaadasa', function(request, response, next){

        const { JaratID } = request.body;
        if(request.session.username && JaratID !== null){

            let db = mysql.createConnection({
                host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
                user: 'doadmin',
                password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
                database: 'vonat',
                port: 25060
            });
            
            db.connect();
            db.query(`SELECT id FROM line_names WHERE name LIKE ?`, 
            [JaratID], (error, jarat) => {
                if(error || jarat.length === 0){
                    response.send(error);
                    db.end();
                    next();
                    return;
                }
                db.query(`INSERT INTO users_favouriteLines(username, line) VALUES(?, ?)`, 
                [request.session.username, jarat[0].id], (error) => {
                    if(error){
                        response.send(error);
                        db.end();
                        next();
                        return;
                    }
                    response.send('<script>alert("Kedvenc járat mentése sikeres."); history.back();</script>');
                    db.end();
                    next();
                });
            });
        }else{
            response.redirect('/');
        }
    });
    app.post('/kedvenc_jarat_torlese', function(request, response, next){

        const { JaratID } = request.body;
        if(request.session.username && JaratID !== null){
            let db = mysql.createConnection({
                host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
                user: 'doadmin',
                password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
                database: 'vonat',
                port: 25060
            });
            
            db.connect();
            db.query(`SELECT id FROM line_names WHERE name LIKE ?`, 
            [JaratID], (error, jarat) => {
                if(error || jarat.length === 0){
                    response.send(error);
                    db.end();
                    next();
                    return;
                }
                db.query(`DELETE FROM users_favouriteLines WHERE username LIKE ? AND line = ?`, 
                [request.session.username, jarat[0].id], (error) => {
                    if(error){
                        response.send(error);
                        db.end();
                        next();
                        return;
                    }
                    response.send('<script>alert("Kedvenc járat törlése sikeres."); history.back();</script>');
                    db.end();
                    next();
                });
            });
        }else{
            response.redirect('/');
        }
    });
    app.post('/kedvenc_jaratok', function(request, response, next){

        if(request.session.username){
            let db = mysql.createConnection({
                host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
                user: 'doadmin',
                password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
                database: 'vonat',
                port: 25060
            });
            
            db.connect();
            db.query(`SELECT * FROM users_favouriteLines WHERE username LIKE ?`, 
            [request.session.username], (error, kedvenc_jaratok) => {
                if(error || kedvenc_jaratok.length === 0){
                    response.send(error);
                    db.end();
                    next();
                    return;
                }
                response.send(kedvenc_jaratok);
                db.end();
                next();
            });
        }else{
            response.redirect('/');
        }
    });
}