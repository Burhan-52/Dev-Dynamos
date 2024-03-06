 
const express = require('express');
const router = express.Router();
const  {getJobs,CreateJobs} =  require('../Controller/JobsController');
const {authenticateUser} = require('../middleware/authentication');
 
 
router.route('/').get(getJobs).post(CreateJobs);

 


module.exports = router;