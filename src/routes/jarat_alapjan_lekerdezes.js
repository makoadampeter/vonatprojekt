module.exports = function (app, mysql){
    app.post('/jarat_megallok', function(request, response, next){

        const { jarat_id } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });

        db.connect();
        db.query(`SELECT * FROM line_stops WHERE line = ?,
        line_stops.stop AS stopID,
        line_stops.stop_number AS stopNumber,
        line_stops.id AS stopKey,
		SELECT * FROM leaving WHERE line_stop_id = stopNumber,
		leaving.departure AS stopDeparture
		SELECT name FROM stops WHERE id = stopID AS stopName`, 
        [stopName, stopDeparture], async (error, data) => {
            if(error){
                throw error;
            }

            response.send(data);
            db.end();
            next();
            return;

            let return_value = [];

            for (let i = 0; i < data.length; i++) {
                return_value.push({
                    "stopName": data[i].stopName,
                    "stopDeparture": data[i].stopDeparture,
                });
                console.log(i);
                if(i === data.length - 1){
                    response.send(return_value);
                    db.end();
                    next();
                }
            }
        });

    });
    app.post('/jarat_id_from_name', function(request, response, next){

        const { jarat_nev } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });

        db.connect();
        db.query(`SELECT id FROM line_names WHERE name = ?`, 
        [jaratID], async (error, data) => {
            if(error){
                throw error;
            }

            response.send(data);
            db.end();
            next();
            return;
        });

    });

}