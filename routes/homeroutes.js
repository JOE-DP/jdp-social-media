const express = require('express')
const router = express.Router()
const homecontroller = require('../controllers/homecontroller')

// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homecontroller.homeGet)

module.exports = router