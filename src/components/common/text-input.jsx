var React = require('react');

module.exports = React.createClass({

    propTypes:{
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },

    render: function(){

        var wrapperClass = 'form-group' + ( (this.props.error && this.props.error.length > 0) ? ' has-error' : '');

        return(
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        ref={this.props.name}
                        onChange={this.props.onChange}
                        value={this.props.value}/>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});