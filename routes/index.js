/* 
  File Name: routes/index.js
  Author: Adrian Dumitriu
  Student ID: 300566849
  Web App Name: Favourite Books
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
