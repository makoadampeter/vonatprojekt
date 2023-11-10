module.exports = function (app, mysql){
    app.post('/auth/register', function(req, res, next){
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
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
                    const registrationDate = new Date();
                    const formattedDate = registrationDate.toISOString().split('T')[0];
                    // A felhasználónév még nem létezik, folytatjuk az adatok beszúrásával
                    query = `INSERT INTO users (username, email, password, firstname, surname, is_admin, registration_date) VALUES (?, ?, ?, ?, ?, ?, ?)`;
                    db.query(query, [username, email, password, firstname, surname, 0, formattedDate], (error, results, fields) => {
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