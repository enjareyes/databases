var models = require('../models');
var bluebird = require('bluebird');
var connect = require('../db/index.js');
var mysql = require('mysql')

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "contentType, accept, data, Content-Type",
  "access-control-max-age": 10 // Seconds.
  //need to allow all headers, e.g. data.
};




module.exports = {
  messages: {

    get: function (req, res) { // a function which handles a get request for all messages

      model.messages.get(req,res);

      // var room = req.json.roomname || '*'
      // connection.query('SELECT * FROM messages JOIN users ON messages.userId=users.userId WHERE roomname = '+ room, function(err, result){//access roomname
      //   if (err) throw err; 
      //   else {
      //     res.writeHead(200, defaultCorsHeaders); //retrieve from DB and send to client
      //     res.end()
      //   }
      // })
    },

    post: function (req, res) { // a function which handles posting a message to the database
      exports.users.post(req, res)
      debugger
      var userID = connection.query('SELECT userId FROM users WHERE username = '+req.json.username, function(err, result) {
        if (err) throw err;
        else { return result }
      })

      connection.query('INSERT INTO users VALUES (' + req.json.message + ',' + userID + ',' + req.json.roomname + ')', function(err, result){ 
        if (err) throw err; 
        else {
          //adding data to users database
          res.writeHead(200, defaultCorsHeaders);    
          res.end()      
        }
      })

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      model.users.get(req,res);

      // connection.query('SELECT * FROM users WHERE username = '+ req.json.username, function(err, result){//access roomname
      //   if (err) throw err; 
      //   else {
      //     res.writeHead(200, defaultCorsHeaders); //retrieve from DB and send to client
      //     res.end()
      //   }
      // })

    },
    post: function (req, res) {
      connection.query('INSERT INTO users VALUES' + req.json.username, function(err, result){ 
        if (err) throw err; 
        else {
          //adding data to messages database
          res.writeHead(200, defaultCorsHeaders);
          res.end()
        }
      })
    }
  }
};

