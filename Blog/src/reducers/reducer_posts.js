import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    
    switch(action.type) {
        case FETCH_POSTS: 
            // return _.mapKeys(action.payload.data, 'id');
            // With later version of lodash we can use following:
            return _.keyBy(action.payload.data, o => o.id);

        case FETCH_POST:
            // ES5 code
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            
            // ES6 version using enhanced object literal
            // syntax to specify key and value
            const { data } = action.payload;
            return { ...state, [data.id] : data }

        case DELETE_POST:
            return _.omit(state, action.payload);
            
        default:
            return state;
    }
}