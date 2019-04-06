import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // Instead of using fat arrow function for input field's onChange,
        //      onChange={ event => this.onInputChange(event) } 
        // use a standard callback function and bind the context of this
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={ this.onFormSubmit } className="input-group">
                <input placeholder="Get a 5-day trend forecast for a choosen city"
                       value={ this.state.term }    // displayed value is set via component (not application) state
                       onChange={ this.onInputChange }
                       className="form-control" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search</button>
                </span>
            </form>
        );
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)