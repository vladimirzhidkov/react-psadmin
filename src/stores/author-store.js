/**
 * Created by vz on 9/23/15.
 */

var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    _ = require('lodash'),
    dispatcher = require('../dispatcher'),
    ActionTypes = require('../constants/action-types');

var CHANGE_EVENT = 'change';

var _authors = [];

var store = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function() {
        return _authors;
    },

    getAuthorById: function(id) {
        return _.find(_authors, {_id: id});
    }
});

dispatcher.register(function(action) {

    switch(action.actionType) {

        case ActionTypes.INITIALIZE :
            _authors = action.initialData.authors;
            store.emitChange();
            break;

        case ActionTypes.CREATE_AUTHOR :
            _authors.push(action.author);
            store.emitChange();
            break;

        case ActionTypes.UPDATE_AUTHOR :
            var existingAuthor = _.find(_authors, {_id: action.author._id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex,1, action.author);
            store.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR :
            _.remove(_authors, function(author){
                return action.id === author._id;
            });
            store.emitChange();
            break;
    }
});

module.exports = store;