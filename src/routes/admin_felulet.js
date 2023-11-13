module.exports = function (app, mysql){
    app.post('/uj_megallo_hozzaadasa', function(request, response, next){

        const { megallo_neve } = request.body;
        if(request.session.is_admin === 1 && megallo_neve !== null){

            
            let db = mysql.createConnection({
                host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
                user: 'doadmin',
                password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
                database: 'vonat',
                port: 25060
            });

            db.connect();
            db.query(`INSERT INTO stops(name) VALUES(?)`, 
            [megallo_neve], (error) => {
                if(error){
                    response.send(error);
                    db.end();
                    next();
                    return;
                }
                response.send('<script>alert("Megálló hozzáadása sikeres."); history.back();</script>');
                db.end();
                next();
                return;
            });
        }else{
            response.redirect('/');
        }
    });
    app.post('/uj_jarat_hozzaadasa', function(request, response, next){

        const { JaratID, Megallok } = request.body;
        if(request.session.is_admin === 1 && JaratID !== null && Megallok !== null){

            
            let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060,
            multipleStatements: true
        });

            db.connect();
            db.query(`INSERT INTO line_names(name) VALUES(?)`,[JaratID], (error) => {
                if(error) {
                    response.send(error);
                    db.end();
                    next();
                    return;
                }
                db.query(`SELECT id FROM line_names WHERE name LIKE ?`, 
                [JaratID], (error, jarat) => {
                    
                    if(error || jarat.length === 0){
                        response.send(error);
                        db.end();
                        next();
                        return;
                    }
                    for (let i = 0; i < Megallok.length; i++) {
                        db.query(`SELECT id FROM stops WHERE stops.name LIKE ?`, 
                        [Megallok[i].megallo_neve], (error, megallo) => {
                            if(error || megallo.length === 0){
                                response.send(error);
                                db.end();
                                next();
                                return;
                            }

                            let time = Megallok[i].erkezes.split(':');
                            let hour = parseInt(time[0]);
                            let minute = parseInt(time[1]);

                            db.query(`INSERT INTO line_stops(line, stop, stop_number) VALUES(?, ?, ?);
                            INSERT INTO arriving(line_stop_id, arrival) VALUES(?, ?);`, 
                            [jarat[0].id, megallo[0].id, i, jarat[0].id, minute], (error, data) => {
                                if(error){
                                    response.send(error);
                                    db.end();
                                    next();
                                    return;
                                }
                                if(i+1 === Megallok.length){
                                    response.send('Success');
                                    db.end();
                                    next();
                                    return;
                                }
                            });
                        });
                    }
                    if(0 === Megallok.length){
                        response.send('Success');
                        db.end();
                        next();
                        return;
                    }
                });
            });
        }else{
            response.redirect('/');
        }
    });
    app.post('/megallo_modositasa', function(request, response, next){

        const { jelenlegi_megallo_nev, uj_megallo_nev} = request.body;
        if(request.session.is_admin === 1 && jelenlegi_megallo_nev !== null && uj_megallo_nev !== null){

            
            let db = mysql.createConnection({
                host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
                user: 'doadmin',
                password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
                database: 'vonat',
                port: 25060
            });

            db.connect();
            db.query(`UPDATE stops SET name = ? WHERE name LIKE ?`, 
            [uj_megallo_nev, jelenlegi_megallo_nev], (error) => {
                if(error){
                    response.send(error);
                    db.end();
                    next();
                    return;
                }
                response.send('<script>alert("Megálló módosítása sikeres."); history.back();</script>');
                db.end();
                next();
                return;
            });
        }else{
            response.redirect('/');
        }
    });
    app.post('/jarat_modositasa', function(request, response, next){

        const { JaratID, Megallok } = request.body;

        if(request.session.is_admin === 1 && JaratID !== null && Megallok !== null){

            let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060,
            multipleStatements: true
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
                for (let i = 0; i < Megallok.length; i++) {
                    db.query(`SELECT id FROM stops WHERE stops.name LIKE ?`, 
                    [Megallok[i].megallo_neve], (error, megallo) => {
                        if(error){
                            response.send(error);
                            db.end();
                            next();
                            return;
                        }
                        db.query(`UPDATE line_stops SET stop = ? WHERE line = ?, stop_number = ?;
                        UPDATE arriving SET arrival = ?;`, 
                        [megallo[0].id, jarat[0].id, i, Megallok[i].erkezes], (error, data) => {
                            if(error){
                                response.send(error);
                                db.end();
                                next();
                                return;
                            }
                            if(i+1 === Megallok.length){
                                response.send('<script>alert("Járat módosítása sikeres."); history.back();</script>');
                                db.end();
                                next();
                                return;
                            }
                        });
                    });
                }
            });
        }else{
            response.redirect('/');
        }
    });
    app.post('/jarat_torlese', function(request, response, next){

        const { JaratID } = request.body;
        if(request.session.is_admin === 1 && JaratID !== null){

            let db = mysql.createConnection({
                host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
                user: 'doadmin',
                password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
                database: 'vonat',
                port: 25060,
                multipleStatements: true
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
                db.query(`DELETE FROM line_names WHERE name = ?;
                ALTER TABLE line_names AUTO_INCREMENT = 1;
                DELETE FROM line_stops WHERE line = ?;
                ALTER TABLE line_stops AUTO_INCREMENT = 1;`,
                [JaratID, jarat[0].id], (error) => {
                    if(error) {
                        response.send(error);
                        db.end();
                        next();
                        return;   
                    }
                    response.send('<script>alert("Járat törlése sikeres."); history.back();</script>');
                    db.end();
                    next();
                    return;
                });
            });
        }else{
            response.redirect('/');
        }
    });
}