var express = require('express');
var router = express.Router();
var communities = require("../models/communities")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(communities)
});

module.exports = router;
