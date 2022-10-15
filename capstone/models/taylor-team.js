/*
; Title:  team.js
; Author: Anita Taylor
; Date:   10/14/2022
; Description:team player model
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const players = new Schema({
    firstName: {String},
    lastName: {String},
    salary: {Number}
})
const teamSchema = new Schema({
    name:{String},
    mascot:{String},
    players:[players]
})

module.exports = mongoose.model("Team",teamSchema)