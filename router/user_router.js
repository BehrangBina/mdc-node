const express = require('express');
const router = express.Router();
const { userById } = require('../controllers/user_controller')
const { requireSignin } = require('../controllers/auth_controller')
router.get('/secret/:userId',requireSignin,(req,res)=>{
    res.json({
        user:req.profile
    })
})

router.param('userId', userById)

module.exports = router;