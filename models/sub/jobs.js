const mongoose = require("mongoose");
const { Schema } = mongoose;
const projects = require('./projects');


const jobs = new Schema({
    name: String,
    position: String,
    description: String,
    projects: [projects],
    start_date: String,
    end_date: String,
});

module.exports = jobs
