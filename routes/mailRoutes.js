let transporter = require('../services/mailer');

module.exports = app => {

    app.post('/api/request', (req, res) => {
        console.log(req.body)
        transporter.sendMail(req.body, (error, info) => {
            if (error) {
                console.log(error)
                res.send("Error: request not send!")
                return;
            }
            res.send(true)
        });
    })
}
