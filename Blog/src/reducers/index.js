import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

// Note: formReducer must be registered with state key of 'form'
const rootReducer = combineReducers({
  blogPosts: PostsReducer,
  form: formReducer
});

export default rootReducer;
