var db = require('../db');

// var connection = mysql.;


module.exports = {
  getAll: function () {
    console.log("We Ran the request!!!")
    db.query("SELECT * FROM messages", (err, result) => {
      if (err) {
        console.error('error getting messages: ' + error.stack);
      } else {
        console.log(result);
      }
    })
  }, // a function which produces all the messages
  //two arguments with our schemea
  create: function (text,userName) {
    db.query(`INSERT INTO messages (id,text,user_name) VALUES (2,'${text}',( SELECT id FROM user WHERE user_name ='${userName}'))`, (err, result) => {
      if (err) {
        console.error('error creating message: ' + err.stack)
      } else {
        console.log(result)
      }
    })
  } // a function which can be used to insert a message into the database
};
module.exports.create('world hello','Bob');

// module.exports.getAll();ç