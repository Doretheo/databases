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
  create: function () {} // a function which can be used to insert a message into the database
};

module.exports.getAll();