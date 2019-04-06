import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBZ-5Glh0lZvZkE4L9q8mkGl0MDNagkYxI';

// Create a new component...that produces some HTML
// Functional component
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Refactored as a class component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          videos: [],
          selectedVideo: null 
        };

        // Initial search
        this.videoSearch('gibson true historic');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
          // this.setState( { videos: videos });      ES6 shortcut when param and property have same name
          this.setState({ 
            videos, 
            selectedVideo: videos[0] 
          });
        });
    }

    render() {
      const vSearch = _.debounce(term => this.videoSearch(term), 300);

      return (
        <div>
          <SearchBar onSearchTermChange={ vSearch } />
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } 
                     videos={ this.state.videos } />
        </div>
      );      
    }
}

// Take the generated HTML and put in on a viewable page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
