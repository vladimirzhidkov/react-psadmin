/**
 * Created by vz on 9/17/15.
 */

var React = require('react'),
    Router = require('react-router');

module.exports = React.createClass({
    render: function(){
        return(
            <div className="jumbotron">
                <h1>Pluralsight Administration!</h1>
                <p>React, React Router, and Flux or ultra-responsive web apps.</p>
                <Router.Link to="about" className="btn btn-primary btn-lg">Learn more</Router.Link>
            </div>
        );
    }
});