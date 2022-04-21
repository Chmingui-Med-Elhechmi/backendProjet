const express = require('express');
const router = express.Router();
const {post}= require('../controllers/post')
const { authMiddleware } = require('../middlewares/authMiddlewares')

router.post("/addPost",authMiddleware,post)
module.exports = router