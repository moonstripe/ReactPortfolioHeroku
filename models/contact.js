const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    message: { type: String, required: true }
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
