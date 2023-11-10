module.exports = function (app, mysql){
    app.post('/register', function(req, res, next){
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat-admin',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060
        });
        

        const password = req.body.password;
        const passwordre = req.body.passwordre;
        const firstname = req.body.firstname;
        const surname = req.body.surname;
        const username = req.body.username;
        const email = req.body.email;
        const adatkezelesi_szab = req.body.adatkezelesi_szab;

        

        if(password !== passwordre || adatkezelesi_szab != 1 || email == "" || firstname == "" || surname == "" || username == "" || password == "" || passwordre == "") {
            
            
            res.render('registration_page');
        } else {
            felhaszn = "";
            db.connect();

            query = `SELECT * FROM users WHERE user = ?`;

            db.query(query, [username], (error, results, fields) => {
                if (error) throw error;

                if (results.length > 0) {
                    // A felhasználónév már létezik, akkor maradunk az oldalon
                    res.render('registration_page');
                } else {
                    // A felhasználónév még nem létezik, folytatjuk az adatok beszúrásával
                    query = `INSERT INTO users (firstname, surname, user, email, password) VALUES (?, ?, ?, ?, ?)`;
                    db.query(query, [firstname, surname, username, email, password], (error, results, fields) => {
                        if (error) throw error;



                        // Sikeres beszúrás esetén a home oldalra átirányítom
                        res.render('home');
                        db.end();
                    });
                }
                
            });
        }
    });    
}