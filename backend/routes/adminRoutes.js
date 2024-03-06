 
const express = require('express');
const router = express.Router();
const  {Login,register,addPrn} =  require('../Controller/adminController');
const authentication = require('../')
 
 
router.route('/loginadmin').post(Login); 
router.route('/registeradmin').post(register); 
router.route('/prn').post(addPrn);


module.exports = router;