/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title } = this.props;
    return (
      <nav className="navbar bg-success">
        <h1>
          <i className="fab fa-github m-1" />
          {title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
