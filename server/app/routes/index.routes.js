const express = require('express');
const router = express.Router();

const uploadRoutes = require('./upload.routes');
const userRoutes = require('./user.routes');

router.use('/upload', uploadRoutes);
router.use('/users', userRoutes);

module.exports = router;