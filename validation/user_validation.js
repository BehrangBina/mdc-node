const { body} = require('express-validator');
exports.userSignupValidation =[
    // username must be an email
    body('name').isLength({ min: 3 }).withMessage("Name Should Be At least 3 Characters"),
    // password must be at least  5 chars long
    body('password').isLength({ min: 8 }).withMessage("Password Should Be At least 8 characters"),
    body('email').isEmail().withMessage("Email Is Invalid Please Provide Valid Email")
]