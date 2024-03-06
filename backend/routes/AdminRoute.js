const { adminLogin } = require("../controller/AdminController");

const router = express.Router();

router.post("/admin", adminLogin);
