const mongoose = require('mongoose')

const chatbotSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isSent: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Chatbot', chatbotSchema)