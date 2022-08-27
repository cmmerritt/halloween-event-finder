import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.Header}>
    <div>
      <h1>Portland Halloween Event Finder</h1>
    </div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events">Events List</NavLink>
    </nav>
  </header>;
};

export default Header;