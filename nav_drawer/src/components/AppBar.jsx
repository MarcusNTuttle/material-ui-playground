import React from 'react';
import PropTypes from 'prop-types';
import {AppBar as mui_AppBar} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

const drawerWidth = 240;


const StyledAppBar = styled(mui_AppBar)`
  display: flex;
  background-color: black;

  ${ifProp('mobileOpen', css`
    background-color: red;
    width: calc(100% - ${ drawerWidth}px);
    margin-left: ${ drawerWidth }px;
  `)}

  ${props => props.theme.breakpoints.up('md')} {
    width: calc(100% - ${ drawerWidth }px);
    margin-left: ${ drawerWidth }px;
  }
`;

const StyledMenuButton = styled(IconButton)`

  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }

`;


export default function AppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log('open')
  };

  return (
    <StyledAppBar mobileOpen={mobileOpen} position="fixed">
      <Toolbar>
        <StyledMenuButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          {mobileOpen ? <CloseIcon />: <MenuIcon />}
        </StyledMenuButton>
        <Typography variant="h6" noWrap>
          Welcome
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}