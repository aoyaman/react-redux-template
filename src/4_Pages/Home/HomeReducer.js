import * as types from './HomeActionTypes';
import * as addBoardDialog from '../../2_Organisms/AddBoardDialog/AddBoardDialogActionTypes';

const initialState = {
  boardList: [],
  selectedBoard: -1,
  isShowAddBoardDialog: false,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HOME_ACTION_ON_ADD_BOARD_BUTTON:
      return { ...state, isShowAddBoardDialog: true };

    case addBoardDialog.ADD_BOARD_DIALOG_ACTION_ON_SUBMIT: {
      // 新しいボード
      const newBoard = {
        name: action.value,
        list: [
          { name: 'すべきこと', todos: [] },
          { name: '作業中', todos: [] },
          { name: '完了', todos: [] },
        ],
      };

      // ボードリストコピー
      const newState = { ...state, boardList: [] };
      for (let i = 0; state.boardList.length; i += 1) {
        newState.boardList.push(state.boardList[i]);
      }

      // 新しいボードをボードリストに追加
      newState.boardList.push(newBoard);
      return newState;
    }

    // -----------------------------
    // ボードを選択
    // -----------------------------
    case types.HOME_ACTION_ON_SELECT_BOARD:
      return { ...state, selectedBoard: action.index };

    default:
      return state;
  }
};

export default TodoReducer;
