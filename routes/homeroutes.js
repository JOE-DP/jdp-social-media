const express = require('express')
const router = express.Router()
const homecontroller = require('../controllers/homecontroller')


const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth,  homecontroller.homeGet)
router.get('/postPage', homecontroller.postPage)
router.post('/addPost', homecontroller.addPost)
router.delete('/delete', homecontroller.deletePost)

module.exports = router