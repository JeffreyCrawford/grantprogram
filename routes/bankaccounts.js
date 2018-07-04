var express = require('express');
var router = express.Router();
var bankaccounts = require("../models/bankaccounts")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(bankaccounts)
});

module.exports = router;
