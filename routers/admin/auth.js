const express = require("express");
const router = express.Router();
// const account_dao = require("../../../daos/account.dao");
const auth = require("../../middleware/auth.middleware");
const crypto = require('crypto');
// const de = require("./../../../common-encrypt-decrypt/de");
// const contants = require('./../../../contants/contants');


router.get("/", async (req, res) => {
    try {
        const accounts = await account_dao.findAllAccount();
        res.json(accounts);
    } catch (err) {
        console.log(err.message);
        res.send("Server error");
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const key = crypto.randomBytes(32);
        const account = await account_dao.findByPk(id);
        const api = await de.decrypt(account.api_encrypt, contants.private_key);
        const connection_database = await de.decrypt(account.connection_database, contants.private_key);
        console.log(api);
        account.api_encrypt = api;
        account.connection_database = connection_database;
        res.json(account);
    } catch (err) {
        console.log(err.message);
        res.send("Server error");
    }
});

router.post("/", async (req, res) => {
    var newAccount = req.body;
    console.log(newAccount);
    try {
        var result = await account_dao.createAccount(newAccount);
        console.log(result);
        if (result.status != undefined) {
            res.json(result);
        } else {
            const response = {
                status: "success",
                message: "Create Account success!"
            }
            res.json(response);
        }

    } catch (err) {
        console.log(err.message);
        res.send("Server error");
    }
});

router.put("/", async (req, res) => {
    var account = req.body;
    var account_id = req.body.id;
    console.log(account);
    try {
        var result = await account_dao.updateAccount(account, account_id);
        if (result) {
            const response = {
                status: "success",
                message: "Update Account success!"
            }
            res.json(response);
        } else {
            const response = {
                status: "fail",
                message: "Update Account fail!"
            }
            res.json(response);
        }
    } catch (err) {
        console.log(err.message);
        res.send("Server error");
    }
});

router.put("/delete", async (req, res) => {
    const id = req.body.id;
    const account = req.body;
    try {
        var result = await account_dao.deleteAccount(account, id);
        if (result) {
            const response = {
                status: "success",
                message: "Delete Account success!"
            }
            res.json(response);
        } else {
            const response = {
                status: "fail",
                message: "Delete Account fail!"
            }
            res.json(response);
        }
    } catch (err) {
        console.log(err.message);
        res.send("Server error");
    }
});
//change password
router.put("/changePassword", async (req, res) => {
    var passAndOTP = req.body;
    try {
        var result = await account_dao.changePassword(passAndOTP);
        if (result) {
            const response = {
                status: "success",
                message: "Change Password success!"
            }
            res.json(response);
        } else {
            const response = {
                status: "fail",
                message: "Change Password fail!"
            }
            res.json(response);
        }
    } catch (err) {
        console.log(err);
        res.json("Server error");
    }
})


module.exports = router;