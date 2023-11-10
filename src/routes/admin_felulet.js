module.exports = function (app, mysql){
    app.post('/uj_megallo_hozzaadasa', function(request, response, next){

        const { megallo_neve } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat_mysql',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060
        });

        db.query(`INSERT INTO stops(name) VALUES(?)`, 
        [megallo_neve], (error) => {
            if(error){
                throw error;
            }
            response.send('<script>alert("Megálló hozzáadása sikeres."); history.back();</script>');
            db.end();
            next();
        });
    });
    app.post('/uj_jarat_hozzaadasa', function(request, response, next){

        const { JaratID, Megallok } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat_mysql',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060,
            multipleStatements: true
        });

        db.query(`INSERT INTO line_names(name) VALUES(?);
        SELECT id FROM line_names WHERE name LIKE ?;`, 
        [JaratID, JaratID], async (error, jarat) => {
            if(error){
                throw error;
            }
            for (let i = 0; i < Megallok.length; i++) {
                await db.query(`SELECT id FROM stops WHERE stops.name LIKE ?`, 
                [Megallok[i].megallo_neve], async (error, megallo) => {
                    if(error){
                        throw error;
                    }
                    await db.query(`INSERT INTO line_stops(line, stop, stop_number) VALUES(?, ?, ?);
                    INSERT INTO arriving(arrival) VALUES(?);`, 
                    [jarat[0].id, megallo[0].id, i, Megallok[i].erkezes], (error, data) => {
                        if(error){
                            throw error;
                        }
                    });
                });
            }
            response.send('<script>alert("Járat hozzáadása sikeres."); history.back();</script>');
            db.end();
            next();
        });
    });
    app.post('/megallo_modositasa', function(request, response, next){

        const { jelenlegi_megallo_nev, uj_megallo_nev} = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat_mysql',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060
        });

        db.query(`UPDATE stops SET name = ? WHERE name LIKE ?`, 
        [uj_megallo_nev, jelenlegi_megallo_nev], (error) => {
            if(error){
                throw error;
            }
            response.send('<script>alert("Megálló módosítása sikeres."); history.back();</script>');
            db.end();
            next();
        });
    });
    app.post('/jarat_modositasa', function(request, response, next){

        const { JaratID, Megallok } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat_mysql',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060,
            multipleStatements: true
        });

        db.query(`SELECT id FROM line_names WHERE name LIKE ?`, 
        [JaratID], async (error, jarat) => {
            if(error){
                throw error;
            }
            for (let i = 0; i < Megallok.length; i++) {
                await db.query(`SELECT id FROM stops WHERE stops.name LIKE ?`, 
                [Megallok[i].megallo_neve], async (error, megallo) => {
                    if(error){
                        throw error;
                    }
                    await db.query(`UPDATE line_stops SET stop = ? WHERE line = ?, stop_number = ?;
                    UPDATE arriving SET arrival = ?;`, 
                    [megallo[0].id, jarat[0].id, i, Megallok[i].erkezes], (error, data) => {
                        if(error){
                            throw error;
                        }
                    });
                });
            }
            response.send('<script>alert("Járat módosítása sikeres."); history.back();</script>');
            db.end();
            next();
        });
    });
    app.post('/jarat_torlese', function(request, response, next){

        const { JaratID } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat_mysql',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060,
            multipleStatements: true
        });

        db.query(`SELECT id FROM line_names WHERE name LIKE ?`, 
        [JaratID], async (error, jarat) => {
            if(error){
                throw error;
            }
            db.query(`DELETE FROM line_names WHERE name = ?;
            ALTER TABLE line_names AUTO_INCREMENT = 1;
            DELETE FROM line_stops WHERE line = ?;
            ALTER TABLE line_stops AUTO_INCREMENT = 1;`,
            [JaratID, jarat[0].id], (error) => {
                if(error) throw error;
                response.send('<script>alert("Járat törlése sikeres."); history.back();</script>');
                db.end();
                next();
            });
        });
    });
}