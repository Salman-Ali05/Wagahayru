var express = require('express');
var router = express.Router();
const anilist = require('anilist-node');
const Anilist = new anilist();
const title = 'Wagahayru';

/* GET home page. */
router.get('/', function (req, res, next) {
  let anime;
  Anilist.media.anime(21718).then(data => {
    anime = data;
    //console.log(anime);
    res.render('index', { title: title, pageTitle: 'Home', anime });
  });
});

/* GET animes page. */
router.get('/animes', function (req, res, next) {
  res.render('animes', { title: title, pageTitle: 'Animes' });
});

/* GET mangas page. */
router.get('/mangas', function (req, res, next) {
  res.render('mangas', { title: title, pageTitle: 'Mangas' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: title, pageTitle: 'Contact' });
});

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: title, pageTitle: 'Login' });
});



module.exports = router;