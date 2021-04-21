/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem',
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={usersStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
