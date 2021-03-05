import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Cabecera = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap={true}>
          Mapa de eficiencia energética de edificios en Catalunya
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </div>;
};

Cabecera.propTypes = {
};

export default Cabecera;
