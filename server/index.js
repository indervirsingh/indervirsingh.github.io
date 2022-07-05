const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const questionRouter = require('./routes/questions-router')

const app = express()
const apiPort = 8080
const url = 'mongodb://localhost:27017/questions'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


db.once('open', () => {
    console.log('Database connected:', url)
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res) => {
    res.send('This is index.html')
})

app.use('/api', questionRouter)

app.listen(apiPort, () => console.log(`Server is running on port ${apiPort}`))
