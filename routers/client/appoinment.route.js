const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.middleware");
const appointmentController = require('../../controllers/appointment.controller');

router.post("/", async(req, res) => {
    let body = req.body;
    try {
        const accounts = await appointmentController.create(body);
        console.log(accounts);
        res.json(accounts);
    } catch (err) {
        console.log(err.message);
        res.send("Server error");
    }
});
module.exports = router;