module.exports = function (app, mysql){
    app.post('/menetrend_alapjan_lekerdezes', function(request, response, next){

        const { indulasi_hely, erkezesi_hely, indulasi_ido, erkezesi_ido } = request.body;

        let db = mysql.createConnection({
            host: '127.0.0.1',
            user: 'everybody',
            password: 'everybody',
            database: 'vonat'
        });

        db.query(`SELECT line_names.name AS JaratID,
        ABS(TIMEDIFF(arriving_indulas.arrival, arriving_erkezes.arrival)) AS Menetido,
        ABS(line_stops_indulas.stop_number - line_stops_erkezes.stop_number) AS Megallok_szama
        FROM line_names
        LEFT OUTER JOIN line_stops AS line_stops_indulas ON line_stops_indulas.line = line_names.id AND line_stops_indulas.stop = ?
        LEFT OUTER JOIN line_stops AS line_stops_erkezes ON line_stops_erkezes.line = line_names.id AND line_stops_erkezes.stop = ?
        LEFT OUTER JOIN arriving AS arriving_indulas ON arriving_indulas.line_stop_id = line_stops_indulas.id
        LEFT OUTER JOIN arriving AS arriving_erkezes ON arriving_erkezes.line_stop_id = arriving_erkezes.id
        WHERE line_stops_indulas.line = line_stops_erkezes.line AND (arriving_indulas.arrival >= ? OR arriving_erkezes.arrival <= ?)`, 
        [indulasi_hely, erkezesi_hely, indulasi_ido, erkezesi_ido], (error, data) => {
            if(error){
                throw error;
            }
            response.send(data);
            db.end();
            next();
        });
    });
}