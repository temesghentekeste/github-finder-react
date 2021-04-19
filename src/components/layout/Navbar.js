import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => (
  <nav className="navbar bg-success">
    <h1>
      <i className={icon} />
      {title}
    </h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github m-1',
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Navbar;
