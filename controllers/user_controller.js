const User = require('../models/user');
const { dbErrorHandler } = require('../helpers/db_error_handler');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken'); //to generate sign token
const expressJwt = require('express-jwt'); //authorization check
const user = require('../models/user');
const fs = require('fs');

exports.signup = (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log('req.body', req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400)
                .json({
                    err: dbErrorHandler(err)
                })
        }
        res.json({ user })
    })
}
const pk = fs.readFileSync('./pk.pub');

exports.signin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: "User With that email does not exist. Pleasae SignUp"
            });
        }
        //if uuser found => user and pwd should match

        // create auth method
        if (!user.authenticate(password)) {
            return res.status(401).json({
                err: ' Email and Password Does not match'
            })
        }
        // create token
        const token = jwt.sign({ _id: user._id }, pk);

        // persist  token
        res.cookie('t', token, { expire: new Date() + 9999 });

        // return response with token
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } });

    })
}

exports.signout = (req,res) =>{
    res.clearCookie('t');
    res.json({message:'Signout Sucess'})
}