const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/questions'
mongoose
    .connect(url, { useNewUrlParser: true })
    .catch(e => {
        console.log('Connection error', e.message)
    })

const db = mongoose.connection


module.exports = db