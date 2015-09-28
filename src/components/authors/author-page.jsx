
var React = require('react'),
    Router = require('react-router'),
    AuthorList = require('./author-list.jsx'),
    AuthorStore = require('../../stores/author-store');

module.exports = React.createClass({

    getInitialState: function(){
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount: function(){
        AuthorStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function(){
        AuthorStore.removeChangeListener(this.onChange);
    },

    render: function(){

        return (
            <div>
                <h1>Authors</h1>
                <Router.Link to="add-author" className="btn btn-default">Add Author</Router.Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    },

    // private methods

    onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors()});
    }
});