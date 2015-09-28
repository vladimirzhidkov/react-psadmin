
var React = require('react'),
    Router = require('react-router');

module.exports = React.createClass({
    render: function(){
        return(
            <ul className="nav sidebar-nav">
                <li><Router.Link to="home"><img src="img/pluralsight-logo.png"/></Router.Link></li>
                <li><Router.Link to="home">Home</Router.Link></li>
                <li><Router.Link to="authors">Authors</Router.Link></li>
                <li><Router.Link to="about">About</Router.Link></li>
            </ul>
        );
    }
});