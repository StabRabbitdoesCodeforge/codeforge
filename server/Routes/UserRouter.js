const express = require('express');

const userController = require('../Controllers/userController');
const cookieController = require('../Controllers/cookieController');
const sessionController = require('../Controllers/sessionController')

const router = express.Router();

// adding return as best practice
router.post('/login', userController.verifyUser, 
// cookieController.setSSIDCookie
 (req, res) => {
    return res.status(200).json(res.locals.userInfo)
})

// adding return as best practice
router.post('/signup', userController.createUser, 
    // cookieController.setSSIDCookie, sessionController.startSession, 
    (req, res) => {
    return res.status(200).json({message: 'User created successfully'});
})






module.exports = router;