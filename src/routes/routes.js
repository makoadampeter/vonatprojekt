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
    app.get('/registration', function(request, response, next){
        response.render('registration_page');
    });
    app.get('/profile', function (request, response, next) {
        response.render('profile');
        next();
    });
    app.get('/login', function(request, response, next){
        response.render('login_page');
    });
    app.get('/logout', function(request, response, next){

        request.session.destroy();
    
        response.redirect("/");
    
    });
}