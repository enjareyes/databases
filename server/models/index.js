var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      var room = req.json.roomname || '*'
      connection.query('SELECT * FROM messages JOIN users ON messages.userId=users.userId WHERE roomname = '+ room, function(err, result){//access roomname
        if (err) throw err; 
        else {
          res.writeHead(200, defaultCorsHeaders); //retrieve from DB and send to client
          res.end()
        }
      })
    }, // a function which produces all the messages

    post: function () {
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
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function () {
      connection.query('SELECT * FROM users WHERE username = '+ req.json.username, function(err, result){//access roomname
        if (err) throw err; 
        else {
          res.writeHead(200, defaultCorsHeaders); //retrieve from DB and send to client
          res.end()
        }
      })
    },
    post: function () {
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

