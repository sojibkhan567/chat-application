// external import
const express = require("express");
const router = express.Router();

// internal import
const { getInbox } = require("../controller/inboxController");
const decorateHtmlRes = require("../middleware/common/decorateHtmlRes");
// Inbox Page
router.get("/", decorateHtmlRes("Inbox"), getInbox);

module.exports = router;
