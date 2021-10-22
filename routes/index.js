var express = require('express');
var router = express.Router();

const API_KEY = process.env.POSTCODEJP_API_KEY

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
