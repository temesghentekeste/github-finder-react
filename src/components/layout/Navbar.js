import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => (
  <nav className="navbar bg-success">
    <h1>
      <i className={icon} />
      {title}
    </h1>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
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
