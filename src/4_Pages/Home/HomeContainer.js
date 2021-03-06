import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';
import * as types from './HomeActionTypes';

const mapStateToProps = (state) => ({
  boardList: state.home.boardList,
  selectedBoard: state.home.selectedBoard,
  isShowAddBoardDialog: state.home.isShowAddBoardDialog,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectBoard: (index) => {
    dispatch({ type: types.HOME_ACTION_ON_SELECT_BOARD, index });
  },
  onAddBoard: () => {
    dispatch({ type: types.HOME_ACTION_ON_ADD_BOARD_BUTTON });
  },
  onCloseBoard: () => {
    dispatch({ type: types.HOME_ACTION_ON_CLOSE_BOARD_BUTTON });
  },
  onSelectTodo: () => {
    dispatch({ type: types.HOME_ACTION_ON_SELECT_TODO_BUTTON });
  },
  onAddTodo: (selectedBoard, listIndex) => {
    dispatch({ type: types.HOME_ACTION_ON_ADD_TODO_BUTTON, selectedBoard, listIndex });
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);

export default HomeContainer;
