const mongoose = require("mongoose");
const { Schema } = mongoose;
const jobs = require("./sub/jobs");
const certificates = require("./sub/certificates");
const education = require("./sub/education");
const services = require('./sub/services');
const portfolio = require('./sub/portfolio');
const languages = require('./sub/languages');


const infoSchema = new Schema({
    firts_name: String,
    last_name: String,
    occupation: String,
    description: String,
    email: String,
    telephone: String,
    web: String,
    education: [education],
    jobs: [jobs],
    certificates: [certificates],
    portfolio: [portfolio],
    languages: [languages]
});

mongoose.model("cv", infoSchema);
