const User = require('../models/user');
const {dbErrorHandler} = require('../helpers/db_error_handler');
const {validationResult } = require('express-validator');
exports.signup = (req,res) =>{
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
    console.log('req.body',req.body)
    const user = new User (req.body)
    user.save((err,user)=>{
        if(err){
            return res.status(400)
                .json({
                    err:dbErrorHandler(err)
                })
        }
        res.json({user})
    })
}