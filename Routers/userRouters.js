const express = require('express');
const router = express.Router();
const User = require('../Models/userSchema');
const { register } = require("../controllers/register")
const { login }= require("../controllers/login")
router.post('/addUser',register);
router.post("/signin",login);
 
module.exports = router