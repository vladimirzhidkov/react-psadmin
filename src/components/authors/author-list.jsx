var React = require('react'),
    Router = require('react-router'),
    toastr = require('toastr'),
    AuthorActions = require('../../actions/author-actions');

module.exports = React.createClass({

    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render: function(){

        var createAuthorRow = function (author){
            return (
                <tr key={author._id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author._id)}>Delete</a></td>
                    <td><Router.Link to="edit-author" params={{id: author._id}}>{author._id}</Router.Link></td>
                    <td>{author.firstName + ' ' + author.lastName}</td>
                </tr>
            );
        };

        return (
            <table className="table">
                <thead><th></th><th>ID</th><th>Name</th></thead>
                <tbody>{this.props.authors.map(createAuthorRow, this)}</tbody>
            </table>
        );
    },

    // private methods

    deleteAuthor: function(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    }
});