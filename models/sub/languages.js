const mongoose = require("mongoose");
const { Schema } = mongoose;

const languages = new Schema({
    language: String,
    speaking: String,
    writing: String
});

module.exports = languages
