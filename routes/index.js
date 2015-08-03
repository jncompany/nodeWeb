var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Chat page. */
router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'chat' });
});

/* GET Chat page. */
router.get('/notification', function(req, res, next) {
  res.render('notification', { title: 'notification' });
});

router.get('/visibility', function(req, res, next) {
	  res.render('visibility', { title: 'visibility' });
	});

module.exports = router;
