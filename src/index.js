import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// API keyAIzaSyBF2IP_eV2gScpLQBqBIx-MKp9_Of6AT_g

const API_KEY = 'AIzaSyBF2IP_eV2gScpLQBqBIx-MKp9_Of6AT_g';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <div className="video-detail-list">
          <div className="video-detail col-sm-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="video-list col-sm-4 offset-8">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
