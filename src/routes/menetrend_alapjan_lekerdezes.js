module.exports = function (app, mysql){
    app.post('/menetrend_alapjan_lekerdezes', function(request, response, next){
        const { indulasi_hely, erkezesi_hely, kezdo_indulasi_ido } = request.body;
        if(indulasi_hely === null || erkezesi_hely === null || kezdo_indulasi_ido === null) return;

        let db = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'vonat',
            port: 3306
        });

        let time = kezdo_indulasi_ido.split(':');
        let hour = parseInt(time[0]);
        let minute = parseInt(time[1]);

        db.connect();
        db.query(`SELECT line_names.name AS JaratID,
        ABS(arriving_erkezes.arrival - arriving_indulas.arrival) AS Menetido,
        arriving_indulas.arrival AS Indulasi_ido_percben,
        arriving_erkezes.arrival AS Erkezesi_ido_percben,
        ABS(line_stops_indulas.stop_number - line_stops_erkezes.stop_number) AS Megallok_szama
        FROM line_names
        LEFT OUTER JOIN stops AS indulas_stops ON indulas_stops.name LIKE ?
        LEFT OUTER JOIN stops AS erkezes_stops ON erkezes_stops.name LIKE ?
        LEFT OUTER JOIN line_stops AS line_stops_indulas ON line_stops_indulas.line = line_names.id AND line_stops_indulas.stop = indulas_stops.id
        LEFT OUTER JOIN line_stops AS line_stops_erkezes ON line_stops_erkezes.line = line_names.id AND line_stops_erkezes.stop = erkezes_stops.id
        LEFT OUTER JOIN arriving AS arriving_indulas ON arriving_indulas.line_stop_id = line_stops_indulas.id
        LEFT OUTER JOIN arriving AS arriving_erkezes ON arriving_erkezes.line_stop_id = line_stops_erkezes.id
        WHERE line_stops_indulas.line = line_stops_erkezes.line`,
            [indulasi_hely, erkezesi_hely], (error, data) => {
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
                        "Megallok_szama": parseInt(data[i].Megallok_szama)
                    });
                }
            }
            response.send(return_value);
            db.end();
            next();
        });

        //time tipussa
        /*
        db.query(`SELECT line_names.name AS JaratID,
        ABS(TIMEDIFF(arriving_indulas.arrival, arriving_erkezes.arrival)) AS Menetido,
        arriving_indulas.arrival AS Indulasi_ido, arriving_erkezes.arrival AS Erkezesi_ido,
        ABS(line_stops_indulas.stop_number - line_stops_erkezes.stop_number) AS Megallok_szama
        FROM line_names
        LEFT OUTER JOIN line_stops AS line_stops_indulas ON line_stops_indulas.line = line_names.id AND line_stops_indulas.stop = ?
        LEFT OUTER JOIN line_stops AS line_stops_erkezes ON line_stops_erkezes.line = line_names.id AND line_stops_erkezes.stop = ?
        LEFT OUTER JOIN arriving AS arriving_indulas ON arriving_indulas.line_stop_id = line_stops_indulas.id
        LEFT OUTER JOIN arriving AS arriving_erkezes ON arriving_erkezes.line_stop_id = arriving_erkezes.id
        WHERE line_stops_indulas.line = line_stops_erkezes.line AND arriving_indulas.arrival >= ?`, 
        [indulasi_hely, erkezesi_hely, kezdo_indulasi_ido], (error, data) => {
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
}