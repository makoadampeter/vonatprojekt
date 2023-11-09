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
            /*  Lehet, hogy átrakom ezt a részt az M4-be
                mert most nem tudom megoldani hogy ha van ugyan az a felhasználó név
                akkor maradjon ezen az oldalon (pl. registration_page)
                vagy ha van valakinek ötlete, akkor szivesen várom,
                nekem valamiért mindig error-t dob.
            */
            db.connect();

            query = `SELECT * FROM users WHERE user = ?`;

            db.query(query, [username], (error, results, fields) => {
                if (error) throw error;

                if (results.length > 0) {
                    res.send("Van ilyen felhasználó");
                }
                res.render('/registration');
                db.end();
            });

            // Ide jön az adatok beszúrása az adatbázisba (Még nincs kész)

            res.render('home');
        }
    });    
}