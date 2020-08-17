const express = require('express');
const router  = express.Router();
const {userSignupValidation} = require('../validation/user_validation')
const{signup} = require('../controllers/user_controller')
 
router.post('/signup',userSignupValidation,signup)

module.exports = router;