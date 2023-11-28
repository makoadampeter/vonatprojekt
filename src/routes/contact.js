module.exports = function (app, nodemailer){
    app.post('/send_email', function(request, response, next){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rf.vonat@gmail.com',
              pass: 'rfvonat&123'
            }
          });
    });
}