const express = require('express');
const router  = express.Router();
const {userSignupValidation} = require('../validation/user_validation')
const {signup,signin,signout} = require('../controllers/user_controller')
 
router.post('/signup',userSignupValidation,signup)
router.post('/signin',signin)
router.get('/signout',signout)
module.exports = router;