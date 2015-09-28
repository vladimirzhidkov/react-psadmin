

var React = require('react'),
    Router = require('react-router');

module.exports = (
    <Router.Route name="app" path="/" handler={require('./components/app.jsx')}>
        <Router.DefaultRoute handler={require('./components/home-page.jsx')}/>
        <Router.Route name="home" handler={require('./components/home-page.jsx')}/>
        <Router.Route name="authors" handler={require('./components/authors/author-page.jsx')}/>
        <Router.Route name="add-author" path="author" handler={require('./components/authors/manage-author-page.jsx')}/>
        <Router.Route name="edit-author" path="author/:id" handler={require('./components/authors/manage-author-page.jsx')}/>
        <Router.Route name="about" handler={require('./components/about/about-page.jsx')}/>

        <Router.Route name="search-result" path="/about/:id" handler={require('./components/authors/author-page.jsx')}/>

        <Router.Redirect from="/" to="home" />
        <Router.Redirect from="/authors/*" to="authors" />
        <Router.NotFoundRoute handler={require('./components/not-found-page.jsx')} />
    </Router.Route>
);