"use strict";

var React = require('react'),
    Router = require('react-router');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Whoops! Sorry, there is nothing to see here.</p>
				<p><Router.Link to="home">Back to Home</Router.Link></p>
			</div>
		);
	}
});