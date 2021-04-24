import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

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

export default Users;
