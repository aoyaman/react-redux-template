import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NormalTemplate from '../../3_Templates/Normal/NormalTemplate';
import BoardComponent from '../../2_Organisms/Board/BoardComponent';
import AddBoardDialogContainer from '../../2_Organisms/AddBoardDialog/AddBoardDialogContainer';

const useStyles = makeStyles((theme) => ({
  boardList: {
    padding: theme.spacing(3, 2),
  },
  board: {
    padding: theme.spacing(3, 2),
  },
}));

const HomeComponent = ({
  boardList, selectedBoard, onAddBoard, onSelectBoard, onCloseBoard,
  onSelectTodo, onAddTodo,
}) => {
  const classes = useStyles();

  // ボード選択中はボードを表示する
  if (selectedBoard >= 0) {
    return (
      <NormalTemplate>
        {selectedBoard >= 0
          && (
            <BoardComponent
              board={boardList[selectedBoard]}
              onCloseButton={onCloseBoard}
              onSelectTodo={(listIndex, todoIndex) => (
                onSelectTodo(selectedBoard, listIndex, todoIndex)
              )}
              onAddTodo={(listIndex) => onAddTodo(selectedBoard, listIndex)}
            />
          )}
      </NormalTemplate>
    );
  }

  // ボードを選択していない場合はボードリストを表示する
  return (
    <NormalTemplate>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Your Todo
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.boardList}>
        {boardList.map((board, index) => (
          <div className={classes.board}>
            <Button variant="contained" color="primary" onClick={() => onSelectBoard(index)}>
              { board.name }
            </Button>
          </div>
        ))}
        <Button variant="contained" onClick={() => onAddBoard()}>
          新しいボードを作成する
        </Button>
      </div>

      <AddBoardDialogContainer />
    </NormalTemplate>
  );
};

HomeComponent.propTypes = {
  boardList: PropTypes.arrayOf({
    name: PropTypes.string,
    list: PropTypes.arrayOf({
      name: PropTypes.string,
    }),
  }).isRequired,
  selectedBoard: PropTypes.number.isRequired,
  onAddBoard: PropTypes.func.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
  onCloseBoard: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onSelectTodo: PropTypes.func.isRequired,
};


export default HomeComponent;
