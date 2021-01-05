const express = require("express");
const router = express.Router();
// insert routers here
router.use("/appointment", require("./../routers/client/appoinment.route"));


// end
module.exports = router;