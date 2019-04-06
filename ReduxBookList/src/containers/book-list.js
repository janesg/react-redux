import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBookActionCreator } from '../actions/index';

// BookList is a container (smart component) rather than just a component (dumb component)
// because it has state that is managed by Redux
class BookList extends Component {
    renderList() {
        return this.props.listOfBooks.map((book) => {
            return (
                <li key={ book.title } 
                    onClick={ () => this.props.pickBook(book) }
                    className="list-group-item">{ book.title }</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // whatever is returned shows up as props inside BookList
    return {
        listOfBooks: state.bookz
    };
}

function mapDispatchToProps(dispatch) {
    // whatever is returned shows up as props inside BookList
    // whenever selectBook called it should be passed to all reducers
    return bindActionCreators({ pickBook: selectBookActionCreator }, dispatch);
}

// Establishes the connection between Redux managed state and the component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);