import * as types from './HomeActionTypes';
import * as addBoardDialog from '../../2_Organisms/AddBoardDialog/AddBoardDialogActionTypes';
import * as addTodoDialog from '../../2_Organisms/AddTodoDialog/AddTodoDialogActionTypes';

const initialState = {
  boardList: [],
  selectedBoard: -1,
  isShowAddBoardDialog: false,
  isShowAddTodoDialog: false,
  addTodoBoardIndex: -1,
  addTodoListIndex: -1,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    // -----------------------------
    // ボード追加ボタン押下
    // -----------------------------
    case types.HOME_ACTION_ON_ADD_BOARD_BUTTON:
      return { ...state, isShowAddBoardDialog: true };

    // -----------------------------
    // ボード追加ダイアログでsubmit
    // -----------------------------
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

    // -----------------------------
    // ボードを閉じる
    // -----------------------------
    case types.HOME_ACTION_ON_CLOSE_BOARD_BUTTON:
      return { ...state, selectedBoard: -1 };

    // -----------------------------
    // TODO追加ボタン押下
    // -----------------------------
    case types.HOME_ACTION_ON_ADD_TODO_BUTTON:
      return {
        ...state,
        isShowAddTodoDialog: true,
        addTodoBoardIndex: action.selectedBoard,
        addTodoListIndex: action.listIndex,
      };

    // -----------------------------
    // Todo追加ダイアログでsubmit
    // -----------------------------
    case addTodoDialog.ADD_TODO_DIALOG_ACTION_ON_SUBMIT: {
      // 新しいTodo
      const newTodo = {
        name: action.value,
      };

      // ボードリストコピー
      const newState = { ...state, boardList: [] };
      for (let i = 0; i < state.boardList.length; i += 1) {
        if (i === state.addTodoBoardIndex) {
          const board = { ...state.boardList[i], list: [] };
          for (let j = 0; j < state.boardList[i].list.length; j += 1) {
            if (j === state.addTodoListIndex) {
              const listItem = { ...state.boardList[i].list[j], todos: [] };
              for (let k = 0; k < state.boardList[i].list[j].todos.length; k += 1) {
                listItem.todos.push(state.boardList[i].list[j].todos[k]);
              }
              listItem.todos.push(newTodo);
              board.list.push(listItem);
            } else {
              board.list.push(state.boardList[i].list[j]);
            }
          }
          newState.boardList.push(board);
        } else {
          newState.boardList.push(state.boardList[i]);
        }
      }
      return newState;
    }


    default:
      return state;
  }
};

export default TodoReducer;
