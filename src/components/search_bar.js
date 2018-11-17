import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.state in searchbar', this.state);
    console.log('event', event);
    
    return (
      <div className="search-bar">
        <label id="search"> Search</label>
        <input
          htmlFor="search"
          onChange={event => this.props.onSearchTermChange(event.target.value)}
         
        />
      </div>
    );
  }
}

export default SearchBar;
