const express = require('express');
const router = express.Router();
const { uploadController } = require('../controller/index.controller');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
    '/pdf', 
    upload.single('pdf'), 
    uploadController.uploadPdf
);

module.exports = router;
