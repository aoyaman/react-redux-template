import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import NormalTemplate from '../../3_Templates/Normal/NormalTemplate';
import BoardComponent from '../../2_Organisms/Board/BoardComponent';

const HomeComponent = ({
  boardList, selectedBoard, onAddBoard, onSelectBoard,
}) => (
  <NormalTemplate>
    {boardList.map((board, index) => (
      <Button variant="contained" color="primary" onClick={() => onSelectBoard(index)}>
        { board.name }
      </Button>
    ))}
    <Button variant="contained" onClick={() => onAddBoard()}>
      新しいボードを作成する
    </Button>
    {selectedBoard && <BoardComponent board={selectedBoard} />}
  </NormalTemplate>
);

HomeComponent.propTypes = {
  boardList: PropTypes.arrayOf({
    name: PropTypes.string,
  }).isRequired,
  selectedBoard: PropTypes.shape({}).isRequired,
  onAddBoard: PropTypes.func.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};


export default HomeComponent;
