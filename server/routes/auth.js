// import the Express library 
const express = require('express');
const router =express.Router();

// import here controller functions for user authentication
const {registerUser, loginUser } = require('../controllers/authController');

/* 
    route  - POST /register
    access- Public
*/
router.post('/register', registerUser);

/* 
     POST /login
    Authenticate user and get token
    Public access
*/
router.post('/login', loginUser);

module.exports = router;
