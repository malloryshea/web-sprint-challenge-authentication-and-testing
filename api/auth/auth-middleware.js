const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

const checkReqBody = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      next({status: 401, message:"username and password required"})
    } else{
      next()
    }
  }
module.exports = {
    checkReqBody
} 