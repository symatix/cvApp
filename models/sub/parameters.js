const mongoose = require("mongoose");
const { Schema } = mongoose;

const parameters = new Schema({
    name: String,
    description: String
});

module.exports = parameters
