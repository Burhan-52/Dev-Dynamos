// companyPost.js

import mongoose from "mongoose";

const companyPostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  jobRoles: {
    type: String,
    required: true,
  },
  eligibilityCriteria: {
    type: String,
    required: true,
  },
  placementStatistics: {
    type: String,
    required: true,
  },
});

export default mongoose.model("companyPosts", companyPostSchema);
