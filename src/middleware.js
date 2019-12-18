const { isUserAuthentic } = require('./is-user-authentic')

const middleware = (req, res, next) => { 
  if (!isUserAuthentic()) {
    res.sendStatus(401)
    return next(new Error('Unauthenticated user'))
  }
  next()
}
const myExport = module.exports = middleware
