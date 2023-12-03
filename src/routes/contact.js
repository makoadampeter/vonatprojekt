module.exports = function (app, nodemailer){
    app.post('/send_email', function(request, response, next){

        const { email, subject, text } = request.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'vonat.rf@gmail.com',
                pass: 'blgg otcx vcoq dbui'
            }
        });
        let options = {
            to: 'vonat.rf@gmail.com',
            subject: subject,
            text: `Feladó: ${email}\n\n${text}`
        };

        transporter.sendMail(options, function(error, info){
            if (error) {
                console.log(error);
                response.send(`<script>alert("Hiba történt."); history.back();</script>`);
            } else {
                console.log('Email sent: ' + info.response);
                response.send(`<script>alert("Email küldése sikeres."); location.replace("/home");</script>`);
            }
        });
    });
}
