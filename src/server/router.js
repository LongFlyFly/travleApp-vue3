let express = require('express')
let router = express.Router()
let all= require('./API/all.js')

router.get('/all', all.get)

module.exports = router
