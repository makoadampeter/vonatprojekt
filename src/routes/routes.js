module.exports = function (app){
    //Szerintem ide csak a get kereseket irjuk, a post kereseket meg kulon fajlokba feladatok szerint csoportositva.
    app.get('/', function(request, response, next){
        response.render('home');
        next();
    });
    app.get('/home', function(request, response, next){
        response.redirect('/');
        next();
    });
    app.get('/profile', function (request, response, next) {
        response.render('profile');
        next();
    });
}