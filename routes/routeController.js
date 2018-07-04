var express = require('express');
var router = express.Router();

var bankaccounts = require("../models/bankaccounts");
var communities = require("../models/communities");
var counties = require("../models/counties");
var disbursementrequests = require("../models/disbursementrequests");
var disbursements = require("../models/disbursements");
var profiles = require("../models/profiles");
var projects = require("../models/projects");
var sites = require("../models/sites");
var users = require("../models/users");

module.exports = {
    getBankaccounts: function(req, res) {
            res.json(bankaccounts);
    },
    getCommunities: function(req, res) {
            res.json(communities);
    },
    getCounties: function(req, res) {
        router.get('/counties', function(req, res) {
            res.json(counties)
        });
    },
    getDisbursementRequests: function(req, res) {
        router.get('/disbursementrequests', function(req, res) {
            res.json(disbursementRequests)
        });
    },

    getDisbursements: function(req, res) {
        router.get('/disbursements', function(req, res) {
            res.json(disbursements)
        });
    },

    getProfiles: function(req, res) {
        router.get('/profiles', function(req, res) {
            res.json(profiles)
        });
    },

    getProjects: function(req, res) {
        router.get('/projects', function(req, res) {
            res.json(projects)
        });
    },

    getSites: function(req, res) {
        router.get('/sites', function(req, res) {
            res.json(sites)
        });
    },

    getUsers: function(req, res) {
        router.get('/users', function(req, res) {
            res.json(users)
        });
    }
}