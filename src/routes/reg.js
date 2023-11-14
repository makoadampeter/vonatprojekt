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
            res.redirect('/registration');
        } else {
            db.connect();
            query = `SELECT * FROM users WHERE username = ?`;
            db.query(query, [username], (error, results, fields) => {
                if (error) throw error;
                if (results.length > 0) {
                    res.redirect('/registration')
                } else {
                    query2 = `SELECT * FROM users WHERE email = ?`;
                    db.query(query2, [email], (error, results, fields) => {
                        if (error) throw error;
        
                        if (results.length > 0) {
                            res.redirect('/registration');
                        }
                    });
                    query = `INSERT INTO users (username, email, password, firstname, surname) VALUES (?, ?, ?, ?, ?)`;
                    db.query(query, [username, email, password, firstname, surname], (error, results, fields) => {
                        if (error) throw error;
                        res.redirect('/');
                        db.end();
                    });
                }
            });
        }
    });    
}