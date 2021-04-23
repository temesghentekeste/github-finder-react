/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */

import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({
  match,
}) => {
  const {
    user, getUser, repos, getUserRepos, loading,
  } = useContext(GithubContext);
  useEffect(() => {
    const { login } = match.params;
    getUser(login);
    getUserRepos(login);
  }, []);

  if (loading) return <Spinner />;
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable:
      {' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: '150px' }}
            alt={name}
          />
          <h1>
            {' '}
            {name}
          </h1>
          <p>
            Location:
            {location}
          </p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Profile
          </a>
          <ul>
            <>
              {login && (
                <li>
                  {' '}
                  <strong>Username: </strong>
                  {login}
                </li>
              )}
            </>

            <>
              {company && (
                <li>
                  {' '}
                  <strong>Company: </strong>
                  {company}
                </li>
              )}
            </>
            <>
              {blog && (
                <li>
                  {' '}
                  <strong>Website: </strong>
                  {blog}
                </li>
              )}
            </>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers:
          {followers}
        </div>
        <div className="badge badge-success">
          Following:
          {following}
        </div>
        <div className="badge badge-dark">
          Public Repos:
          {public_repos}
        </div>
        <div className="badge badge-light">
          Public Gists:
          {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

User.propTypes = {
  match: PropTypes.object.isRequired,
};

export default User;
