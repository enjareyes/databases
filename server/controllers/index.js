var models = require('../models/index.js');
var bluebird = require('bluebird');
var connect = require('../db/index.js');
var mysql = require('mysql')


module.exports = {
  messages: {

    get: function (req, res) { // a function which handles a get request for all messages
      console.log(req.url)
      models.messages.get(req,res);

    },

    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req, res);


    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      models.users.get(req,res);


    },
    post: function (req, res) {
      models.users.post(req, res);


    }
  }
};

