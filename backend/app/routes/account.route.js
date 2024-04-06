const express = require("express");
const accounts = require("../controllers/account.controller");

const router = express.Router();

router.route("/getEmail/:email").get(accounts.checkEmail);

router.route("/register").post(accounts.register);

router.route("/login").post(accounts.login);

router.route("/getAccountByEmail/:email").get(accounts.getAccountByEmail);

router.route("/deleteAccount/:email").delete(accounts.deleteAccount);

module.exports = router;
