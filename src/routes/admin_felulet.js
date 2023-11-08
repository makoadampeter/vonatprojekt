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

        db.query(`INSERT INTO stops(name) VALUES(?)`, 
        [megallo_neve], (error, data) => {
            if(error){
                throw error;
            }
            response.send(data);
            db.end();
            next();
        });
    });
    app.post('/uj_jarat_hozzaadasa', function(request, response, next){

        const { JaratID, Erkezes, Megallok } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat-admin',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060,
            multipleStatements: true
        });

        db.query(`INSERT INTO line_names(name) VALUES(?);
        INSERT INTO arriving(arrival) VALUES(?);
        SELECT id FROM line_names WHERE name LIKE ?;`, 
        [JaratID, Erkezes, JaratID], async (error, line_names) => {
            if(error){
                throw error;
            }
            for (let i = 0; i < Megallok.length; i++) {
                await db.query(`INSERT INTO line_stops(line, stop) VALUES(?, ?);`, 
                [line_names[0].id, Megallok[i]], (error, data) => {
                    if(error){
                        throw error;
                    }
                    response.send("Success");
                    db.end();
                    next();
                });
            }
        });
    });
}