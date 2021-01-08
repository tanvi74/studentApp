const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    RollNo: {
        type: Number,
        required: true
    },
    Physics: {
        type: Number,
        required: true
    },
    Chemistry: {
        type: Number,
        required: true
    },
    Maths: {
        type: Number,
        required: true
    },
    Total: {
        type: Number,
        required: true
    },
    Percentage: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Marks', notesSchema);