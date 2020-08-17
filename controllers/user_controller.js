const User = require('../models/user');
const {dbErrorHandler} = require('../helpers/db_error_handler');

exports.signup = (req,res) =>{
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