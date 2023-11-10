module.exports = function (app, mysql){
    app.post('/menetrend_alapjan_lekerdezes', function(request, response, next){

        const { indulasi_hely, erkezesi_hely, kezdo_indulasi_ido, kezdo_erkezesi_ido } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat_mysql',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060
        });

        db.connect();
        db.query(`SELECT line_names.name AS JaratID,
        ABS(TIMEDIFF(arriving_indulas.arrival, arriving_erkezes.arrival)) AS Menetido,
        arriving_indulas.arrival AS Indulasi_ido, arriving_erkezes.arrival AS Erkezesi_ido,
        ABS(line_stops_indulas.stop_number - line_stops_erkezes.stop_number) AS Megallok_szama
        FROM line_names
        LEFT OUTER JOIN line_stops AS line_stops_indulas ON line_stops_indulas.line = line_names.id AND line_stops_indulas.stop = ?
        LEFT OUTER JOIN line_stops AS line_stops_erkezes ON line_stops_erkezes.line = line_names.id AND line_stops_erkezes.stop = ?
        LEFT OUTER JOIN arriving AS arriving_indulas ON arriving_indulas.line_stop_id = line_stops_indulas.id
        LEFT OUTER JOIN arriving AS arriving_erkezes ON arriving_erkezes.line_stop_id = arriving_erkezes.id
        WHERE line_stops_indulas.line = line_stops_erkezes.line AND (arriving_indulas.arrival >= ? OR arriving_erkezes.arrival <= ?)`, 
        [indulasi_hely, erkezesi_hely, kezdo_indulasi_ido, kezdo_erkezesi_ido], (error, data) => {
            if(error){
                throw error;
            }
            response.send(data);
            db.end();
            next();
        });
    });
}