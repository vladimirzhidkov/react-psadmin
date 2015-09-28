var React = require('react'),
    Sidebar = require('./common/sidebar.jsx'),
    Router = require('react-router');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3"><Sidebar/></div>
                    <div className="col-sm-9 main"><Router.RouteHandler/></div>
                </div>
            </div>
        );
    }
});