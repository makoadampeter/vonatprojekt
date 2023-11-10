module.exports = function (app, mysql){
    app.post('/login', function(req, res, next){
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'vonat-admin',
            password: 'AVNS_BdjUT4-cpoduHn2uKQs',
            database: 'vonat',
            port: 25060
        });
        

        
        const username = req.body.username;
        const password = req.body.password;

        

        if(password == "" || username == "") {
            
            
            res.render('login_page');
        } else {
            db.connect();

            const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
            db.query(query, [username, password], (error, results, fields) => {
                if (error) throw error;


                if (results.length > 0) {
                    res.render('home');

                } else {
                    res.render('login_page');
                }
                db.end();
            });
        }
                
    });
}