module.exports = function (app, mysql){
    app.post('/auth/login', function(req, res, next){
        let db = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'vonat',
            port: 3306
        });

        
        const username = req.body.username;

        let inputString = req.body.password;

        let modifiedString = Array.from(inputString)
            .map(char => String.fromCharCode(char.charCodeAt(0) + '2'))
            .join('');



        const password = modifiedString;
        

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
                        req.session.password = inputString;

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