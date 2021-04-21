/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable  no-unused-vars */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

class User extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getUser } = this.props;
    const { login } = this.props.match.params;
    getUser(login);
  }

  render() {
    const { user, loading } = this.props;
    if (loading) return <Spinner />;
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
      <>
        <Link to="/" className="btn btn-light">Back To Search</Link>
      </>
    );
  }
}

export default User;
