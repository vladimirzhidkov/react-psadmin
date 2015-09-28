/**
 * Created by vz on 9/14/15.
 */

var constants = require('./../constants'),
    router = require('express').Router();

router.route('/')
    .get(function(req, res){
        res.sendFile(constants.root + '/index.html');
    });
module.exports = router;