const mongoose = require("mongoose");
const { Schema } = mongoose;

const certificates = new Schema({
    ulr: String,
    description: String,
});

module.exports = certificates
