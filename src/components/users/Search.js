import { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Search user..."
            value={text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
