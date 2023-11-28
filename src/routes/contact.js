module.exports = function (app, nodemailer){
    app.post('/send_email', function(request, response, next){

        const { user_email, subject, text } = request.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rf.vonat@gmail.com',
              pass: 'rfvonat&123'
            }
        });
        let options = {
            from: 'rf.vonat@gmail.com',
            to: user_email,
            subject: subject,
            text: text
        };

        transporter.sendMail(options, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });
}