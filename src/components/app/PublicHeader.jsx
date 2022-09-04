import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const PublicHeader = () => {
  return <header className={styles.Header}>
    <div>
      <h1>POrtlAnd HalLoweEn EveNt FiNdEr</h1>
    </div>
    <nav>
      <NavLink to="/events">Events list</NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </nav>
  </header>;
};

export default PublicHeader;