/**
 * Created by vz on 9/23/15.
 */

var dispatcher = require('../dispatcher'),
    AuthorApi = require('../api/authorApi'),
    ActionTypes = require('../constants/action-types');

module.exports = {

    createAuthor: function(author) {

        $.ajax({
            url: 'http://localhost:7777/api/authors',
            type: 'POST',
            data: author,
            dataType: 'json',
            success: function(data){
                dispatcher.dispatch({
                    actionType: ActionTypes.CREATE_AUTHOR,
                    author: data
                });
            },
            error: function(error){

            }
        });


        //var newAuthor = AuthorApi.saveAuthor(author);
        //
        //dispatcher.dispatch({
        //    actionType: ActionTypes.CREATE_AUTHOR,
        //    author: newAuthor
        //});
    },

    updateAuthor: function(author) {


        //var updatedAuthor = AuthorApi.saveAuthor(author);
        //
        //dispatcher.dispatch({
        //    actionType: ActionTypes.UPDATE_AUTHOR,
        //    author: updatedAuthor
        //});


        $.ajax({
            url: 'http://localhost:7777/api/authors/' + author._id,
            type: 'PATCH',
            data: author,
            dataType: 'json',
            success: function(data){
                dispatcher.dispatch({
                    actionType: ActionTypes.UPDATE_AUTHOR,
                    author: data
                });
            },
            error: function(error){

            }
        });
    },

    deleteAuthor: function(id) {
        $.ajax({
            url: 'http://localhost:7777/api/authors/' + id,
            type: 'DELETE',
            success: function(){
                dispatcher.dispatch({
                    actionType: ActionTypes.DELETE_AUTHOR,
                    id: id
                });
            },
            error: function(error){

            }
        });
    }

};