module.exports = function (app, mysql){
    app.post('/profile_edit', function(req, res, next){
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });

        let inputString = (req.body.password !== "") ? req.body.password : req.session.password;

        let modifiedString = Array.from(inputString)
            .map(char => String.fromCharCode(char.charCodeAt(0) + '2'))
            .join('');

        let inputString2 = (req.body.passwordre !== "") ? req.body.passwordre : req.session.password;

        let modifiedString2 = Array.from(inputString2)
            .map(char => String.fromCharCode(char.charCodeAt(0) + '2'))
            .join('');


        const username = req.session.username;
        const password = modifiedString;
        const passwordre = modifiedString2;
        const firstname = (req.body.firstname !== "") ? req.body.firstname : req.session.firstname;
        const surname = (req.body.surname !== "") ? req.body.surname : req.session.surname;
        const email = (req.body.email !== "") ? req.body.email : req.session.email;
        const emailre = (req.body.emailre !== "") ? req.body.emailre : req.session.email;

        if(password !== passwordre || email !== emailre) {
            res.redirect('/profile');
        } else {
            db.connect();
            query = `UPDATE users SET email = ?, password = ?, firstname = ?, surname = ? WHERE username = ?`;
            db.query(query, [email, password, firstname, surname, username], (error, results, fields) => {
                if (error) throw error;
            });
            req.session.email = email;
            req.session.firstname = firstname;
            req.session.surname = surname;
            req.session.password = password;
            res.redirect('/profile');
            db.end();
        }
    });
}