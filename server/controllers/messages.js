var models = require('../models');

module.exports = {
  get: function (req, res) {
    // get all function. pass in a call back in the err first
    models.messages.getAll((err, results) => {
      // if error
      if (err) {
        console.error('error getting messages!!!')
        res.end()
      } else {
        //else res.send(results
        res.send(results)
        res.end()
      }
    })
  },

  // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(text, userName,(err, results) => {
      if( err) {
        console.log("we had an error in create")
        res.end()
      } else {
        res.send(results)
        console.log(results)
        console.log("we recived info from the create request from database")
        res.end()
      }
    })

  } // a function which handles posting a message to the database
}