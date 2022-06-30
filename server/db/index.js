const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/questions', { useNewUrlParser: true })
    .catch(e => {
        console.log('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db