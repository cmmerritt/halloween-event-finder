import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const PrivateHeader = () => {
  return <header className={styles.Header}>
    <div>
      <h1>Portland Halloween Event Finder</h1>
    </div>
    <nav>
      <NavLink to="/events">Events List</NavLink>
      <NavLink to="/wishlist">My Wishlist</NavLink>
    </nav>
  </header>;
};

export default PrivateHeader;