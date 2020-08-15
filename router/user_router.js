const express = require('express');
const router  = express.Router();

const{sayHi} = require('../controllers/user_controller')
router.get('/',sayHi)

module.exports = router;