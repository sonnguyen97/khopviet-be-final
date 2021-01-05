const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.middleware");
const crypto = require('crypto');
const { check, validationResult } = require("express-validator");


router.get("/", async(req, res) => {
    try {
        const accounts = await account_dao.findAllAccount();
        res.json(accounts);
    } catch (err) {
        console.log(err.message);
        res.send("Server error");
    }
});

/* ----- 
  @route  POST api/auth
  @desc   Authenticate user & get token
-----*/
router.post(
    "/login", [
        // check("email", "Please include a valid email").isEmail(),
        check(
            "password",
            "Please enter a password with 6 or more character"
        ).exists()
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { storeDomain, password } = req.body;
        var passwordEncrypt = CryptoJS.SHA256(password);
        try {
            console.log(req.body);
            let account = await Account.findOne({
                where: {
                    store_domain: storeDomain,
                    password: passwordEncrypt.toString()
                }
            });

            if (!account) {
                return res
                    .status(400)
                    .json({ errors: [{ message: "Invalid email or password" }] });
            }
            // const isMatch = await bcrypt.compare(password, user.password);
            // if (!isMatch) {
            //     return res.status(400).json({ errors: [{ message: 'Invalid email or password' }] })
            // }
            const payload = {
                account: {
                    id: account.id
                }
            };
            jwt.sign(
                payload,
                config.get("jwtSecret"), { expiresIn: 3600000000000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        account
                    });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

router.get("/:id", async(req, res) => {
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

router.post("/", async(req, res) => {
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

router.put("/", async(req, res) => {
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

router.put("/delete", async(req, res) => {
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
router.put("/changePassword", async(req, res) => {
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