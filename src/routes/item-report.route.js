const express = require('express');
const router = express.Router();
const itemReportController = require('../controllers/item-report.controller');
const verifyJWT = require('../middlewares/autorizator');

router.get('/',verifyJWT, itemReportController.xlsx);

module.exports = router;