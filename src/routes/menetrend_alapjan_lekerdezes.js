module.exports = function (app, mysql){
    app.post('/jarat_kereses', function(request, response, next){

        const { indulasi_hely, erkezesi_hely, indulasi_ido } = request.body;

        let db = mysql.createConnection({
            host: '127.0.0.1',
            user: 'everybody',
            password: 'everybody',
            database: 'vonat'
        });

        db.query(`SELECT * FROM line_names 
        LEFT OUTER JOIN line_stops AS line_stops_indulas ON line_stops_indulas.line = line_names.id AND line_stops_indulas.stop = ?
        LEFT OUTER JOIN line_stops AS line_stops_erkezes ON line_stops_erkezes.line = line_names.id AND line_stops_erkezes.stop = ?
        LEFT OUTER JOIN arriving ON arriving.line_stop_id = line_stops_indulas.id
        WHERE line_stops_indulas.line = line_stops_erkezes.line AND arriving = ?`, 
        [indulasi_hely, erkezesi_hely, indulasi_ido], (error, data) => {
            if(error){
                throw error;
            }
            response.send(data);
            db.end();
            next();
        });

        response.send('Menetrend');
        next();
    });
}