const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    cdate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Tasks', taskSchema)
