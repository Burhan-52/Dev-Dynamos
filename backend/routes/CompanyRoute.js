const { createCompanyPost } = require("../controller/AdminController");
const { getCompanyDetails } = require("../controller/CompanyController");

const router = express.Router();

router.post("/createcompany", createCompanyPost);
router.get("/company", getCompanyDetails);
