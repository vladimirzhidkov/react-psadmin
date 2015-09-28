/**
 * Created by vz on 9/10/15.
 */

var mongoose = require('mongoose'),
    Author = require('./models/author');

mongoose.connect('mongodb://localhost/react_psadmin', function(){
    console.log('connected to db');

    mongoose.connection.db.dropDatabase();

    var authors = [{
        firstName: 'Cory',
        lastName: 'House'
    },
    {
        firstName: 'Scott',
        lastName: 'Allen'
    },
    {
        firstName: 'Dan',
        lastName: 'Wahlin'
    }];

    authors.forEach(function(author){
        new Author(author).save();
    });
});