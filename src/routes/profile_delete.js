module.exports = function (app, mysql){
    app.post('/profile_delete', function(req, res, next){
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
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