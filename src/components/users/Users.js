/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import UserItem from './UserItem';

const Users = (props) => {
  const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem',
  };

  const { users } = props;
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
};

export default Users;
