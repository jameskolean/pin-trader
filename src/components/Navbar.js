import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Badge,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  mainDrawerListItems,
  secondaryDrawerListItems,
} from './DrawerListItems';

export default function Navbar({ classes }) {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              // eslint-disable-next-line prettier/prettier
              open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            Pin Trader
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          {/* <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography> */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            // aria-controls={menuId}
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainDrawerListItems}</List>
        <Divider />
        <List>{secondaryDrawerListItems}</List>
      </Drawer>
    </>
  );
}
Navbar.propTypes = {
  classes: PropTypes.shape({
    toolbarIcon: PropTypes.string,
    drawerPaper: PropTypes.string,
    drawerPaperClose: PropTypes.string,
    inputRoot: PropTypes.string,
    searchIcon: PropTypes.string,
    search: PropTypes.string,
    appBarShift: PropTypes.string,
    appBar: PropTypes.string,
    toolbar: PropTypes.string,
    menuButtonHidden: PropTypes.string,
    menuButton: PropTypes.string,
    title: PropTypes.string,
    inputInput: PropTypes.string,
  }),
};
