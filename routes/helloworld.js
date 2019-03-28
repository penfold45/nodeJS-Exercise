var express = require('express');
var router = express.Router();

router.get('/hello-world', function (req, res, next) {
    res.render('hello', { title: 'Hello World' });
});

module.exports = router;