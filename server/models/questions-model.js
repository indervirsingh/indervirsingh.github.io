const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Questions = new Schema(

    {
        category: { type: String, required: true }, 
        question: { type: String, required: true },
        choices: { type: [String], required: true },
        correct_answer: { type: String, required: true },
    },
    { timestamps: true },

)

module.exports = mongoose.model('questions', Questions)