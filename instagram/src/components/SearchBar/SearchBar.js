import React from 'react';
import SearchInput from './SearchBar.js'

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className='search-bar'>
        <div>
          <i class="fab fa-instagram"></i>
          <span>Instagram</span>
        </div>
        <SearchInput />
      </div>
    )
  }
}

export default SearchBar;
