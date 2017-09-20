let transporter = require('../services/mailer');

module.exports = app => {

    app.post('/api/request', (req, res) => {
        transporter.sendMail(req.body, (error, info) => {
            if (error) {
                console.log("ERROR SENDING MAIL",error)
                res.send(false)
            } else if (!error) {
                console.log('Mail sent to', info)
                res.send(true)
            }
        });
    })
}
