const express = require('express')
const router = express.Router()
const Chatbot = require('../models/chatbot')

// Getting all
router.get('/', async (req, res) => {
  try {
    const chatbots = await Chatbot.find()
    res.json(chatbots)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


router.get('/chatlogs/:user', getChatBot, (req, res) => {
  res.json(res.chatbot)
})

router.get('/chatlogs/:user/:limit/:start', getChatBot, (req, res) => {
  res.json(res.chatbot)
})


// Creating one
router.post('/chatlogs/:user', async (req, res) => {
  const chatbot = new ChatBot({
    name: req.body.message,
    isSent: req.body.isSent
  })
  try {
    const newChatBot = await chatbot.save()
    res.status(201).json(newChatBot)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})



// Deleting One
router.delete('/chatlogs/:user', getChatBot, async (req, res) => {
  try {
    await res.chatbot.remove()
    res.json({ message: 'Deleted Chatbot' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getChatBot(req, res, next) {
  let chatbot
  try {
    chatbot = await Chatbot.findById(req.params.user)
    if (chatbot == null) {
      return res.status(404).json({ message: 'Cannot find chatbot' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.chatbot = chatbot
  next()
}

// Deleting One
router.delete('/chatlogs/:user', getChatBot, async (req, res) => {
  try {
    await res.chatbot.remove()
    res.json({ message: 'Deleted Chatbot' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getChatBot(req, res, next) {
  let chatbot
  try {
    chatbot = await Chatbot.findById(req.params.user)
    if (chatbot == null) {
      return res.status(404).json({ message: 'Cannot find chatbot' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.chatbot = chatbot
  next()
}


// Deleting One
router.delete('/chatlogs/:user/:msgid', getChatBot, async (req, res) => {
  try {
    await res.chatbot.remove()
    res.json({ message: 'Deleted Chatbot' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getChatBot(req, res, next) {
  let chatbot
  try {
    chatbot = await Chatbot.findById(req.params.user)
    if (chatbot == null) {
      return res.status(404).json({ message: 'Cannot find chatbot' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  

  res.chatbot = chatbot
  next()
}

module.exports = router