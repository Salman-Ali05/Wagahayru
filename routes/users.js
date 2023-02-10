var express = require('express');
var router = express.Router();
const anilist = require('anilist-node');
const Anilist = new anilist();
const mongoose = require('mongoose');
const title = 'Wagahayru';
const User = require('../models/Users');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/wagahayru', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected Alhamdulilah shonen");
});

router.post('/connection', function (req, res, next) {
  let login = req.body.login;
  let pswd = req.body.password;

  currentUser = User.findOne({login: login, password: pswd});
  console.log(currentUser);
  let anime;
  Anilist.media.anime(21718).then(data => {
    anime = data;
    res.render('index', { title: title, pageTitle: 'Home', anime, isLogged: 'true', currentUser });
  });
});

router.post('/submit', function (req, res, next) {
  let login = req.body.login;
  let pswd = req.body.password;
  let confirmpwsd = req.body.passwordC;

  if (pswd == confirmpwsd){
    User.create({
      login : login,
      password: pswd
    });
  }
  let anime;
  Anilist.media.anime(21718).then(data => {
    anime = data;
    res.render('index', { title: title, pageTitle: 'Home', anime, isLogged: 'true'});
  });
});

module.exports = router;