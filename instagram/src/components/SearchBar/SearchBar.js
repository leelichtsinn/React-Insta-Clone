import React from 'react';

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
        <form action=''>
          <input type='text'>search</input>
        </form>
      </div>
    )
  }
}


export default SearchBar;
