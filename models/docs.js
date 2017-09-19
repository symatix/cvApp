const mongoose = require("mongoose");
const { Schema } = mongoose;
const parameters = require('./sub/parameters');


const docs = new Schema({
    parameters: [parameters]
}, { collection: 'docs' });

mongoose.model("docs", docs);
