import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    
    componentDidMount() {
        // Destructure params to get the id passed in the URL
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    
    onDeleteClick() {
        const { id } = this.props.match.params;
        
        this.props.deletePost(id, () => {
            // This next call navigates to route
            this.props.history.push('/');
        });
        
    }
    
    render() {
        const { post } = this.props;
        
        // First time through, post will not have been retrieved
        if (!post) {
            return (
                <div>Loading...</div>
            );
        }
        
        return (
            <div>
                <Link className="btn btn-primary" to="/">Back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={ this.onDeleteClick.bind(this) }
                >
                    Delete Post
                </button>
                <h3>{ post.title }</h3>
                <h6>{ post.categories }</h6>
                <p>{ post.content }</p>
            </div>
        );
    }
}

// Use ES6 destructuring to pass just the blogPosts rather than whole state
// 2nd parameter is the props that get passed to this specific component
function mapStateToProps({ blogPosts }, ownProps) {
    return { post: blogPosts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);