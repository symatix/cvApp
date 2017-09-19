const mongoose = require("mongoose");
const { Schema } = mongoose;

const education = new Schema({
    name: String,
    start_date: String,
    end_date: String,
});

module.exports = education
