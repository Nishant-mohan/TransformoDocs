const express = require('express');
const router = express.Router();
const { uploadController } = require('../controller/index.controller');
const multer = require('multer');

const fileSize = 8 * 1024 * 1024; // 8MB universal limit

const storage = multer.memoryStorage();

const upload = multer({ 
    storage,
    limits: { fileSize },
});

router.post(
    '/pdf', 
    upload.single('pdf'), 
    uploadController.uploadPdf
);

module.exports = router;
