const express = require('express')
const middleware = require('./middleware')
const welcomeRoute = require('./welcome-route')
const server = express()
server.use(express.json())
server.use('/api', middleware, welcomeRoute)
module.exports = server
