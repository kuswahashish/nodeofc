const router = require('express').Router()
const controller =  require('../controller/appcontroller')

router.post('/login',controller.login)
router.post('/signup',controller.signup)
router.post('/addtodo',controller.addtodo)
router.get('/todo',controller.homepage)
router.get('/logout',controller.logout)

module.exports = router