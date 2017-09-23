const mongoose = require("mongoose");
const { Schema } = mongoose;

const portfolioSchema = new Schema({
    ulr: String,
    name:String,
    description: String
}, { collection: 'portfolio' });

mongoose.model("portfolio", portfolioSchema);
