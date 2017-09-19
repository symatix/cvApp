const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
    firts_name: String,
    last_name: String,
    occupation: String,
    email: String,
    telephone: String,
    web: String
}, { collection: 'contact' })

mongoose.model("contact", contactSchema);
