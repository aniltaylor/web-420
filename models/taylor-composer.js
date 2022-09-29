// Title: taylor-composer.js
// Author: anita taylor
// Date: 09/21/2022
// Description: Mongoose model for composer API

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let composerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

module.exports = mongoose.model("Composer", composerSchema)
