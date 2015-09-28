
$ = require('jquery');

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes.jsx'),
    InitializeActions = require('./actions/initialize-actions');

InitializeActions.initApp();

Router.run(routes, /*Router.HistoryLocation,*/ function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});