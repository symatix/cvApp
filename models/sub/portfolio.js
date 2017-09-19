const mongoose = require("mongoose");
const { Schema } = mongoose;

const portfolio = new Schema({
    ulr: String,
    description: String
});

module.exports = portfolio
