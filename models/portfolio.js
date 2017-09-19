const mongoose = require("mongoose");
const { Schema } = mongoose;

const portfolioSchema = new Schema({
    ulr: String,
    description: String
});

mongoose.model("portfolio", portfolioSchema);
