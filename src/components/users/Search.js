/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({
  searchUsers, showClearUsers, clearUsers, setAlert,
}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something.', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search user..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />

        {showClearUsers && (
        <input
          type="button"
          value="Clear"
          onClick={clearUsers}
          className="btn btn-light btn-block"
        />
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearUsers: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
