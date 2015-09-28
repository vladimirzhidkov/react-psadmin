/**
 * Created by vz on 9/8/15.
 */

var express = require('express'),
    Author = require('./../models/author');
var router = express.Router();

router.route('/authors')
    .get(function(req, res){
        Author.find(function(err, authors){
            res.send(authors);
        });
    })
    .post(function(req, res){
        var author = {firstName: req.body.firstName, lastName:req.body.lastName };
        new Author(author).save(function(err, author){
            res.send(author);
        });
    });

router.route('/authors/:id')
    .delete(function(req, res){
        Author.findOne({_id: req.params.id}).remove(function(err, author){
            console.log(err);
            res.status(200).send();
        });
    })
    .patch(function(req, res){
        Author.findOne({_id: req.body._id}, function(err, author){

            // replace all properties of author with the properties of req.body
            for(var key in req.body){
                author[key] = req.body[key];
            }
            author.save();
            res.status(200).send();
        })
    });

module.exports = router;