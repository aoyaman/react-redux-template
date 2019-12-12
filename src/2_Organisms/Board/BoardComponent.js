import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const BoardComponent = (board) => {
  const classes = useStyles();

  console.log('BoardComponent', board);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            { board.name }
          </Typography>
        </Toolbar>
      </AppBar>

      { board }
    </div>
  );
};


BoardComponent.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default BoardComponent;
