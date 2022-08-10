const express = require("express");

const login = require("../controllers/login");
const register = require("../controllers/registration");

const router = express.Router();
router.post("/login", login);
router.post("/register", register);

module.exports = router;
