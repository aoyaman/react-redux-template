import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import ListItem from '../ListItem/ListItemComponent';
import AddTodoDialogContainer from '../AddTodoDialog/AddTodoDialogContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  itemList: {
    padding: theme.spacing(3, 2),
  },
  item: {
    padding: theme.spacing(3, 2),
  },
}));

const BoardComponent = ({
  board, onCloseButton, onSelectTodo, onAddTodo,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onCloseButton}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            { board.name }
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.itemList}>
        {board.list.map((item, listIndex) => (
          <div className={classes.item}>
            <ListItem
              item={item}
              onSelectTodo={(todoIndex) => onSelectTodo(listIndex, todoIndex)}
              onAddTodo={() => onAddTodo(listIndex)}
            />
          </div>
        ))}
      </div>
      <AddTodoDialogContainer />
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
  onCloseButton: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onSelectTodo: PropTypes.func.isRequired,
};

export default BoardComponent;
