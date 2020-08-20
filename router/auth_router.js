const express = require('express');
const router  = express.Router();
const {userSignupValidation} = require('../validation/user_validation')
const {signup,signin,signout,requireSignin} = require('../controllers/auth_controller')
 
router.post('/signup',userSignupValidation,signup)
router.post('/signin',signin)
router.get('/signout',signout)
router.get("/hello",requireSignin,(req,res)=>{    res.send("Hello Send");})


module.exports = router;