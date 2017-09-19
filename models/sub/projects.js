const mongoose = require("mongoose");
const { Schema } = mongoose;

const projects = new Schema({
    project: String
});

module.exports = projects
