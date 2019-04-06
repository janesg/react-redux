import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { createPost } from '../actions';

class PostsNew extends Component {
    
    renderField(field) {
        // ES6 destructuring field object
        const { meta: { touched, error } } = field;
        const className = 
            `form-group ${ touched && error ? 'has-danger' : '' }`;
        
        return (
            <div className={ className }>
                <label>{ field.label }</label>
                <input className="form-control"
                    type="text"
                    { ...field.input }
                />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }
    
    onSubmit(values) {
        this.props.createPost(values, () => {
            // This next call navigates to route
            this.props.history.push('/');
        });
    }
    
    render() {
        // reduxForm passed the handleSubmit function to component
        // via props (see the export default call at bottom)
        const { handleSubmit } = this.props;
        
        return (
            <div>
                { /* 
                    When form is submitted, redux form first runs through
                    all its processing and validation...then if everything 
                    is ok, it will invoke the callback function provided
                    with the values of each field in the form
                */ }
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field 
                        name="title"
                        label="Title"
                        component={ this.renderField }
                    />
                    <Field 
                        name="categories"
                        label="Categories"
                        component={ this.renderField }
                    />
                    <Field 
                        name="content"
                        label="Post Content"
                        component={ this.renderField }
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    
    const errors = {};
    
    // Note: errors property name MUST match Field 'name' property it applies to
    if (!values.title) {
        errors.title = 'Enter a title';
    } else if (values.title.length < 3) {
        errors.title = 'Title must be at least 3 characters in length';
    }
    
    if (!values.categories) {
        errors.categories = 'Enter at least one category';
    }
    
    if (!values.content) {
        errors.content = 'Enter some content for the post';
    }
    
    // If errors is empty, form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

// String assigned to form property just has to be unique
// reduxForm and connect helpers combined through nesting
// createPost action creator dispatch mapped to props
// where it is referenced in onSubmit callback
export default reduxForm({ 
    form: 'PostsNewForm',
    validate
})(
    connect(null, { createPost })(PostsNew)
);