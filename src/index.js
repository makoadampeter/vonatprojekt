const http = require('http');
const express = require('express');
const app = express();
const session = require('express-session');
const mysql = require('mysql2');
const bcrypt = require("bcryptjs");
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

//A public mappaban vannak a frontend fileok (css, frontend javascript, images, audio...)
app.use(express.static('public'));
//A HTML kodokat a views mappaban ejs fajlokba irhatjuk (html fileok helyett).
app.set('view engine', 'ejs');

app.use(session({
  secret : 'titkos',
  resave : true,
  saveUninitialized : true
}));

app.use(function(request, response, next) {
  //Bejelentkezes utan igy tarolhatjuk el a user adata(i)t a sessionben.
  response.locals.username = request.session.username;
  response.locals.email = request.session.email;
  response.locals.firstname = request.session.firstname;
  response.locals.surname = request.session.surname;
  response.locals.is_admin = request.session.is_admin;
  response.locals.registration_date = request.session.registration_date;
  response.locals.password = request.session.password;
  next();
});

//Kulso backend javascript fajlok importalasa.
//A routes-ban feldolgozhatjuk a get kereseket.
require('./routes/routes')(app);
require('./routes/menetrend_alapjan_lekerdezes')(app, mysql);
require('./routes/jarat_alapjan_lekerdezes')(app, mysql);
require('./routes/admin_felulet')(app, mysql);
require('./routes/reg')(app, mysql);
require('./routes/log')(app, mysql);

const hostname = '0.0.0.0';
const port = 3000;
 
const server = http.createServer(app);
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
