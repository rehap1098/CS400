const express = require('express');
const router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    res.render('ps3', { title: 'My name is Reha'});
});

/* POST */
router.post('/', function(req, res, next){
    const title = 'String length'

    const returned = {
        string: req.body.title,
        stringL: req.body.title.length
    };

    const parse = JSON.parse(JSON.stringify(returned))

    res.render('ps3', {title2: parse.string, title3: parse.stringL });
});

module.exports = router;
