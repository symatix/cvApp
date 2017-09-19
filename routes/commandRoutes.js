const _ = require('lodash')
const axios = require('axios');
const mongoose = require("mongoose");
const keys = require('../config/keys')


const Docs = mongoose.model("docs");
const Contact = mongoose.model("contact");
const Services = mongoose.model("services");

module.exports = app => {

    app.get('/api/ip', (req, res) => {
        console.log(req.ip)
        res.send(req.ip);
    })

    app.get('/api/client', async (req, res) => {
        // change
        const reqJSON = await axios.get(`http://api.db-ip.com/addrinfo?api_key=${keys.apiKeyIP}&addr=188.129.44.115`);
        res.send(reqJSON.data)
    })

    app.get('/api/documentation', async (req, res) => {
        const docs = await Docs.findOne();
        res.send(docs);
    })
    app.get('/api/help', async (req, res) => {
        const docs = await Docs.findOne();
        res.send(docs);
    })

    app.get('/api/contact', async (req, res) => {

        const contact = await Contact.findOne();
        console.log(contact)
        res.send(contact);
    })
    //
    app.get('/api/contact/email', async (req, res) => {
        const data = await Contact.findOne({}, {"email":1})
        res.send(data["email"])
    })
    app.get('/api/contact/web', async (req, res) => {
        const data = await Contact.findOne({}, {"web":1})
        res.send(data["web"])
    })
    app.get('/api/contact/telephone', async (req, res) => {
        const data = await Contact.findOne({}, {"telephone":1})
        res.send(data["telephone"])
    })
    app.get('/api/contact/name', async (req, res) => {
        res.send("Dino Kraljeta");
    })

    app.get('/api/cv', (req, res) => {
        res.send("Load up the CV")
    })

    app.get('/api/portfolio', (req, res) => {
        res.send("Load up the (portfolio)")
    })

    app.get('/api/services', async (req, res) => {
        const data = await Services.find();

        res.send(data)
    })

    app.get('/api/request', (req, res) => {
        res.send("Load up the CV")
    })

}
