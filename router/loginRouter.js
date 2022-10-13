// external import
const express = require("express");
const router = express.Router();

// internal import
const { getLogin } = require("../controller/loginController");
const decorateHtmlRes = require("../middleware/common/decorateHtmlRes");
// login Page
router.get("/", decorateHtmlRes("Login"), getLogin);

module.exports = router;
