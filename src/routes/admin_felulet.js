module.exports = function (app, mysql){
    app.post('/users_data', function(request, response, next){

        if(request.session.user){
            let db = mysql.createConnection({
                host: '127.0.0.1',
                user: 'everybody',
                password: 'everybody',
                database: 'vonat'
            });

            db.query(`SELECT * FROM Users`, (error, data) => {
                if(error){
                    throw error;
                }
                response.send(data);
                db.end();
                next();
            });
        }else{
            response.redirect('/');
        }
    });
}