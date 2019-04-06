import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render() {
        if (!this.props.book) {
            return (
                <div><h3>Select a book...</h3></div>
            );
        }

        return (
            <div>
                <h3>Book Details:</h3>
                <div>Title : { this.props.book.title }</div>
                <div>No. of pages : { this.props.book.pages }</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        book: state.aktifBook 
    };
}

export default connect(mapStateToProps)(BookDetail)