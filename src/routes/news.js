const express = require('process');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/',newsController.index);

module.exports = router;