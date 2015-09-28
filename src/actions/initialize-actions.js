/**
 * Created by vz on 9/24/15.
 */
var dispatcher = require('../dispatcher'),
    //AuthorApi = require('../api/authorApi'),
    ActionTypes = require('../constants/action-types');

module.exports = {

    initApp: function() {

        $.ajax({ url: 'http://localhost:7777/api/authors',
            dataType: 'json',
            success: function(data){
                dispatcher.dispatch({
                    actionType: ActionTypes.INITIALIZE,
                    initialData: { authors: data }
                });
            },
            error: function(error){

            }
        });
    }
};