import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    
    // Lifecycle method automatically called once by React 
    // after component first rendered in DOM
    // ... there's also a componentWillMount() called prior to
    // appearing in DOM but component is eagerly rendered and
    // will not delay for an async operation to complete
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    renderPosts() {
        // As 'posts' is an Object we can't use the Array.map() function
        // Instead we use lodash function that works on Object
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={ post.id }>
                    <Link to={ `/posts/${ post.id }` }>
                        { post.title }
                    </Link>
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>My Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.blogPosts };
}

// ES6 short-cut to bind (to the props) the action creator 
// as the dispatch function
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);