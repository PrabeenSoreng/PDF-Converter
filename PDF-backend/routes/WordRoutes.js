const express = require('express');
const WordCtrl = require('../controllers/WordCtrl');

const router = express.Router();

router.post('/word-to-pdf', WordCtrl.WordToPdf);

module.exports = router;