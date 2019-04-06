import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//     return <input />;
// };

// Class component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Only inside constructor do we set the state directly
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={ this.state.term }  // Makes this a controlled component; value is set from state
                    onChange={ event => this.onInputChange(event.target.value) }/>
                 {/* <h4>Value of input : { this.state.term }</h4>  */}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;