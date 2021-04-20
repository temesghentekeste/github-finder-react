/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable  no-unused-vars */

import { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getUser } = this.props;
    const { login } = this.props.match.params;
    getUser(login);
  }

  render() {
    const { user, loading } = this.props;
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hereable,
    } = user;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default User;
