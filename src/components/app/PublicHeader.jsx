import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles, Button } from '@material-ui/core';
// import styles from './Header.module.css';

const PublicHeader = () => {

  const headersData = [
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Sign up/Log in",
      href: "/signup",
    }
  ];

  const useStyles = makeStyles(() => ({
    header: {
      fontFamily: "Halloween",
      backgroundColor: "#403d39ff",
      color: "#eb5e28ff",
    },
  }));

  const { header } = useStyles();

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const headerDisplay = () => {

    return (
    <Toolbar>
      <div>
      <h1>POrtlAnd HalLoweEn EveNt FiNdEr</h1>
      </div>
      {getMenuButtons()}
    </Toolbar>
    )
  };

  return (
    <header>
      <AppBar className={header}>{headerDisplay()}</AppBar>
    </header>
  );

//   return <header className={styles.Header}>
//     <div>
//       <h1>POrtlAnd HalLoweEn EveNt FiNdEr</h1>
//     </div>
//     <nav>
//       <NavLink to="/events">Events list</NavLink>
//       <NavLink to="/signup">Sign up</NavLink>
//     </nav>
//   </header>;
};

export default PublicHeader;