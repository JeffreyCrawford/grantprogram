var express = require('express');
var router = express.Router();



var communities = require("../models/communities");


module.exports = function (app) {

    router.get('/communities', router);

}
