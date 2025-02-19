module.exports = function (app, mysql){
    app.post('/profile_delete', function(req, res, next){
        let db = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'vonat',
            port: 3306
        });

        const username = req.session.username;

        db.connect();
        query = `DELETE FROM users WHERE username = ?`;
        db.query(query, [username], (error, results, fields) => {
            if (error) throw error;
        });
        res.redirect('/logout');
        db.end();
    });
}