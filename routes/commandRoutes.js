const _ = require('lodash')
const axios = require('axios');
const mongoose = require("mongoose");
const keys = require('../config/keys')


const Docs = mongoose.model("docs");
const Contact = mongoose.model("contact");
const Services = mongoose.model("services");
const Portfolio = mongoose.model("portfolio");

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
        res.send(contact);
    })

    app.get('/api/portfolio', async (req, res) => {
        const portfolio = await Portfolio.find({});
        res.send(portfolio);
    })

    app.get('/api/services', async (req, res) => {
        const data = await Services.find();

        res.send(data)
    })

}
