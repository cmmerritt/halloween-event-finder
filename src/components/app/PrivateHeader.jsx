import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const PrivateHeader = () => {
  return <header className={styles.Header}>
    <div>
      <h1>POrtlAnd HalLoweEn EveNt FiNdEr</h1>
    </div>
    <nav>
      <NavLink to="/events">Events list</NavLink>
      <NavLink to="/wishlist">My wishlist</NavLink>
      <NavLink to="/addevent">Add an event</NavLink>
    </nav>
  </header>;
};

export default PrivateHeader;