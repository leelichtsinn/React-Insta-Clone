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
        <SearchInput />
      </div>
    )
  }
}


const SearchInput = () => {
  return (
    <form action='' method='get'>
      <input type='text' name='SearchInput'></input>
    </form>
  )
}

export default SearchBar;
