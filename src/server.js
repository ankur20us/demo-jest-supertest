const express = require('express')
const welcomeRoute = require('./welcome-route')
const server = express()
server.use(express.json())
server.use('/api', welcomeRoute)

module.exports = server
