const jobsSchema = require('../Models/CompanySchema');
const getJobs = async(req,res)=>{
    const data = await jobsSchema.find({});
    res.status(200).json(data);
}
const CreateJobs = async(req,res)=>{
    const data = await jobsSchema.create(req.body);
    res.status(200).json(data);
}

module.exports = {getJobs,CreateJobs}

