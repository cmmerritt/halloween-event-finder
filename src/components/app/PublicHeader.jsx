import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const PublicHeader = () => {

  const [state, setState] = useState({
    mobileView: false,
  })

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

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
    display: flex;
    justify-content: space-between;
  `

  const ButtonDiv = styled.div`
    padding-left: 500px;
  `

  const headerDisplay = () => {
    return (
    <Div>
      <Toolbar>
        <div>
        <h1>POrtlAnd HalLoweEn EveNt FiNdEr</h1>
        </div>
        <ButtonDiv>
          {getMenuButtons()}
        </ButtonDiv>
      </Toolbar>
    </Div>
    )
  };

  return (
    <header>
      <AppBar>{headerDisplay()}</AppBar>
    </header>
  );

};

export default PublicHeader;