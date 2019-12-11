import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
  boardList, selectedBoard, onAddBoard, onSelectBoard,
}) => {
  const classes = useStyles();

  if (selectedBoard) {
    return (
      <NormalTemplate>
        {selectedBoard && <BoardComponent board={selectedBoard} />}
      </NormalTemplate>
    );
  }

  return (
    <NormalTemplate>
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
  }).isRequired,
  selectedBoard: PropTypes.shape({}).isRequired,
  onAddBoard: PropTypes.func.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};


export default HomeComponent;
