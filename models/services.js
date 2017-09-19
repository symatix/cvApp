const mongoose = require("mongoose");
const { Schema } = mongoose;

const servicesSchema = new Schema({
    service: String
}, { collection: 'services' });

mongoose.model("services", servicesSchema);
