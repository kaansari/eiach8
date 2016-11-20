var express = require('express');
var router = express.Router();

var User = require("../models/user");

router.use(function (req ,res ,next){
    res.locals.currentUser = req.user;
    res.locals.errors = req.flash("errors");
    res.locals.infos = req.flash("info");
    next();

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().exec(function(err,users){

      if (err) {return net (err);}
      res.render("index", {users:users});

  });
});

module.exports = router;
