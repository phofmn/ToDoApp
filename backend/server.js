const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 300;
const url = 'mongodb://127.0.0.1:27017/tasks';

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const taskRoute = require('./routes/tasks')
app.use('/api/tasks/', taskRoute)

app.listen(port, () => {
    console.log('Server started on Port ' + port);
})

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))





