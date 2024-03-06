 
const express = require('express');
const router = express.Router();
const  {register,verifyEmail,Login} =  require('../Controller/Student');

router.route('/studentRegister').post(register);
router.route('/login').post(Login);
router.route('/verifyToken').post(verifyEmail);

module.exports = router;