const { Router } = require('express')
const WelcomeService = require('./welcome-service')
const router = Router()
router.get('/', (_req, res) => res.json({ 'message': WelcomeService.message() }))
module.exports = router
