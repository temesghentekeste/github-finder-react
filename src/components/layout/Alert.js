/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert: { msg, type } }) => alert && (
<div className={`alert alert-${type}`}>
  <div className="fas fa-info-circle">
    {'  '}
    {msg}
  </div>
</div>
);

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};
export default Alert;
