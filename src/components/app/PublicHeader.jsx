import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import './Header.module.css';

const PublicHeader = () => {

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

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
    @font-face {
      font-family: 'Halloween',
      src: url("./HallowenInline.ttf"),
      };
    font-family: 'Halloween';
    background-color: #403d39ff;
    color: #eb5e28ff;
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px): {
      padding-left: 0,
      }
    };
  `

  const ButtonDiv = styled.div`
    padding-left: 15rem;
    justify-content: right;
  `

  const DrawerContainer = styled.div`
    padding: 20px 30px;
  `

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    }

    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }))
    }
    
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <RouterLink
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </RouterLink>
        );
      });
    };
    return (
      <Div>
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClick: handleDrawerClose,
            }}
          >
            <DrawerContainer>{getDrawerChoices()}</DrawerContainer>
          </Drawer>
        </Toolbar>
        <div>
          <h1>POrtlAnd HalLoweEn EveNt FiNdEr</h1>
        </div>
      </Div>
    )
  };

  const displayDesktop = () => {
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
      {/* <AppBar>{headerDisplay()}</AppBar> */}
      <AppBar>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );

};

export default PublicHeader;