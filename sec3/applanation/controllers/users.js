// Require the model/s you're controlling
var User = require("../models/user");

//||||||||||||||||||||||||||--
//  USER SHOW PAGE
//||||||||||||||||||||||||||--
var userShow = function(req, res, next){
  var id = req.params.id;

  User.findById(id, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    res.render(
      'users/show', {
        user: user
      });
  });
};

// Export the function/s as JSON
module.exports = {
  userShow: userShow
}