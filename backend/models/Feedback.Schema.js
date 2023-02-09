const mongoose = require('mongoose')

const schema = mongoose.Schema;

const feedbackSchema = schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }
})

const FeedbackSchema = mongoose.model('feedback', feedbackSchema,'feedback')

module.exports = {
    FeedbackSchema
}