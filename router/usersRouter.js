// external import
const express = require("express");
const router = express.Router();

// internal import
const { getUsers } = require("../controller/usersController");
const decorateHtmlRes = require("../middleware/common/decorateHtmlRes");

// Users Page
router.get("/", decorateHtmlRes("Users"), getUsers);

module.exports = router;
