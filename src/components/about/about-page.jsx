var React = require('react');

module.exports = React.createClass({

    //statics:{
    //    willTransitionTo: function(transition, params, query, callback){
    //
    //        var response = confirm('Are you sure you want to read a page that\'s this boring?');
    //        if(!response){
    //            transition.abort();
    //        } else {
    //            callback();
    //        }
    //    },
    //    willTransitionFrom: function(transition, component){
    //        if(!confirm('Are you sure you want to leave a page that\'s this exciting?')){
    //            transition.abort();
    //        }
    //    }
    //},

    render: function(){
        return(
            <div>
                <h1>About</h1>
                <p>
                    This Application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});