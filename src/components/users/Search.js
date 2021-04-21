/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearUsers: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { setAlert } = this.props;
    if (text === '') {
      setAlert('Please enter something.', 'light');
    } else {
      this.props.searchUsers(text);
      console.log(text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { text } = this.state;
    const { showClearUsers, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search user..."
            value={text}
            onChange={this.onChange}
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
  }
}

export default Search;
