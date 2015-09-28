
var React = require('react'),
    Router = require('react-router'),
    toastr = require('toastr'),
    AuthorForm= require('./author-form.jsx'),
    authorStore = require('../../stores/author-store'),
    authorActions = require('../../actions/author-actions');

// accepts props.param.id from the path '/author/:id'

module.exports = React.createClass({

    getInitialState: function(){
        return {
            author: {_id:'', firstName:'', lastName:''},
            errors: {},
            dirty: false
        };
    },

    mixins:[
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component){
            if(component.state.dirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },

    componentWillMount: function() {
        var authorId = this.props.params.id; // from the path '/author/:id'
        if(authorId) {
            this.setState({author: authorStore.getAuthorById(authorId)});
        }
    },

    render: function(){
        return(
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors}/>
            </div>
        );
    },

    // custom methods

    setAuthorState: function(event){
        var field = event.target.name;
        this.state.author[field] = event.target.value;
        this.state.dirty = true;
        this.setState(this.state);
    },

    saveAuthor: function(event){
        event.preventDefault();

        if(!this.authorFormIsValid()) {
            return;
        }

        if(this.state.author._id){
            authorActions.updateAuthor(this.state.author);
        } else {
            authorActions.createAuthor(this.state.author);
        }

        this.state.dirty = false;
        this.setState(this.state);
        toastr.success('Author saved.');
        this.transitionTo('authors');

    },

    authorFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors
        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }
        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }
        this.setState(this.state);
        return formIsValid;
    }

});