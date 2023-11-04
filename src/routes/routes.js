module.exports = function (app){
    app.get('/', function(req, res, next){
        res.render('home');
    });
    app.get('/home', function(req, res, next){
        res.redirect('/');
    });
}