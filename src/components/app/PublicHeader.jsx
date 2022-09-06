import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

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

  const Div = styled.div`
    font-family: "Halloween";
    background-color: #403d39ff;
    color: #eb5e28ff;
  `

  const headerDisplay = () => {
    return (
    <Div>
      <Toolbar>
        <div>
        <h1>POrtlAnd HalLoweEn EveNt FiNdEr</h1>
        </div>
        {getMenuButtons()}
      </Toolbar>
    </Div>
    )
  };

  return (
    <header>
      <AppBar className>{headerDisplay()}</AppBar>
    </header>
  );

};

export default PublicHeader;