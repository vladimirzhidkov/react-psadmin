var schema = {
    firstName: String,
    lastName: String
};

module.exports = require('mongoose').model('Author', schema, 'authors');