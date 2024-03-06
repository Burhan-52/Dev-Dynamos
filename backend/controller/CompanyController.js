const { CompanyPostSchema } = require("../model/CompanyPostSchema");

const createCompanyPost = async (req, res) => {
  const { title, jobRoles, eligibilityCriteria, placementStatistics } =
    req.body;

  try {
    const newCompanyPost = new CompanyPostSchema({
      title,
      jobRoles,
      eligibilityCriteria,
      placementStatistics,
    });

    await newCompanyPost.save();
    res.json({ msg: "Company post created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getCompanyDetails = async (req, res) => {
  const company = await CompanyPostSchema.find({});
  res.json({ company });
};

module.exports = { createCompanyPost, getCompanyDetails };
