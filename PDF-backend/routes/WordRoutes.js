const express = require('express');
const WordCtrl = require('../controllers/WordCtrl');

const router = express.Router();

router.get('/word-to-pdf/:fileName', WordCtrl.DownloadFile);

router.post('/word-to-pdf', WordCtrl.WordToPdf);

module.exports = router;