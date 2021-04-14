/* eslint-disable  camelcase */
/* eslint-disable  react/prop-types */
import { PropTypes } from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => (
  <div className="card text-center">
    <img
      src={avatar_url}
      alt={login}
      className="round-img"
      style={{ width: '60px' }}
    />
    <h2>{login}</h2>
    <div>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  </div>
);

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
