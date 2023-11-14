module.exports = function (app, mysql){
    app.post('/auth/login', function(req, res, next){
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });
        

        
        const username = req.body.username;
        const password = req.body.password;

        

        if(password == "" || username == "" || req.session.username) {
            
            
            res.redirect('/login');
        } else {
            db.connect();

            const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
            db.query(query, [username, password], (error, results, fields) => {
                if (error) throw error;


                if (results.length > 0) {
                    req.session.regenerate(function (err) {
                        if (err) throw error;

                        req.session.username = results[0].username;
                        req.session.email = results[0].email;
                        req.session.firstname = results[0].firstname;
                        req.session.surname = results[0].surname;
                        req.session.is_admin = results[0].is_admin;
                        req.session.registration_date = results[0].registration_date;

                        res.redirect('/');
                        db.end();
                        next();
                    });

                } else {
                    res.redirect('/login');
                    db.end();
                    next();
                }
            });
        }
                
    });
}