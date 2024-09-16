const express = require('express');
const router = express.Router();
const { userController } = require('../controller/index.controller');

// @route       POST /users/create
// @desc        Create a new user
router.post('/create', userController.createUser);

// @route       GET /users
// @desc        Get all users
router.get('/', userController.getUsers);

module.exports = router;
