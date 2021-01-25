const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const writingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    body: { type: String, required: true }
});

const Writing = mongoose.model("writing", writingSchema);

module.exports = Writing;
