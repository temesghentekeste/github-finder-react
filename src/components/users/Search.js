import React from 'react';

const Search = () => (
  <div>
    <form className="form">
      <input type="text" name="text" placeholder="Search user..." />
      <input type="submit" value="Search" className="btn btn-dark btn-block" />
    </form>
  </div>
);

export default Search;
