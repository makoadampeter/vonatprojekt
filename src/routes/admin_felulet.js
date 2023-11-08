module.exports = function (app, mysql){
    app.post('/uj_megallo_hozzaadasa', function(request, response, next){

        const { megallo_neve } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat-admin',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060
        });

        db.query(`INSERT INTO line_names(line)
        VALUES(?)`, 
        [megallo_neve], (error, data) => {
            if(error){
                throw error;
            }
            response.send(data);
            db.end();
            next();
        });
    });
}