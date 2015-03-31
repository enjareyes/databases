var db = require('../db/index.js');
var connect = require('../db/index.js');

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "contentType, accept, data, Content-Type",
  "access-control-max-age": 10 // Seconds.
  //need to allow all headers, e.g. data.
};

module.exports = {
  messages: {
    get: function (req, res) {
      // var room = req.body.roomname || '*'
      // console.log('room', room)
      connect.query('SELECT * FROM messages', function(err, result){//access roomname
        if (err) throw err; 
        else {
          // return result
          console.log('join',result)
          res.writeHead(200, defaultCorsHeaders); //retrieve from DB and send to client
          res.end(JSON.stringify(result))
        }
      })
    }, // a function which produces all the messages

    post: function (req, res) {
      // console.log(req.body.message)
      // exports.users.post(req, res)
      var userID = connect.query('SELECT id FROM users WHERE userName = "'+req.body.username + '";', function(err, result) {
        if (err) throw err;
        else { return result }
      })

      connect.query('INSERT INTO messages SET ?', {message: req.body.message, userId: userID, roomname: req.body.roomname}, function(err, result){
        if (err) throw err; 
        else {
          //adding data to users database
          console.log('posted')
          res.writeHead(200, defaultCorsHeaders);    
          res.end()      
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (req, res) {
      connect.query('SELECT * FROM users WHERE userName = '+ req.body.username + ';', function(err, result){//access roomname
        if (err) throw err; 
        else {
          res.writeHead(200, defaultCorsHeaders); //retrieve from DB and send to client
          res.end()
        }
      })
    },
    post: function (req, res) {
      // connect.query('INSERT INTO users (userName) VALUES (' + req.body.username + ');', function(err, result){ 
      connect.query('INSERT INTO users SET ?', {userName: req.body.username}, function(err, result){
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

