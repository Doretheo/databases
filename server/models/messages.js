var db = require('../db');

// var connection = mysql.;


module.exports = {
  getAll: function (callback) {
    db.query("SELECT * FROM messages", (err, result) => {
      if (err) {
        console.error('error getting messages: ' + error.stack);
        callback(err);
      } else {
        console.log("We got the request!!! from models")
        console.log(result);
        callback(null,result)
      }
    })
  }, // a function which produces all the messages
  //two arguments with our schemea
  create: function (text, userName, callback) {
    db.query(`INSERT INTO messages (text,user_id) VALUES ("${text}",( SELECT id FROM user WHERE user_name ="${userName}"))`, (err, result) => {
      if (err) {
        console.error('error creating message: ' + err.stack)
        callback(err);
      } else {
        console.log('we posted it from models!')
        callback(null, result)
      }
    })
  } // a function which can be used to insert a message into the database
};
// module.exports.create('hello rainbows','Kim');
// module.exports.(getAll)