/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  const { name, html_url } = repo;
  return (
    <div className="card">
      <a href={html_url}>{name}</a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
