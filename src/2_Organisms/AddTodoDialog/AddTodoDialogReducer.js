import * as home from '../../4_Pages/Home/HomeActionTypes';
import * as addTodoDialog from './AddTodoDialogActionTypes';

const initialState = {
  isShow: false,
  textValue: '',
  boardIndex: -1,
  listIndex: -1,
};

const AddTodoDialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case home.HOME_ACTION_ON_ADD_TODO_BUTTON:
      return {
        ...state,
        isShow: true,
        boardIndex: action.boardIndex,
        listIndex: action.listIndex,
      };

    case addTodoDialog.ADD_TODO_DIALOG_ACTION_ON_CLOSE:
    case addTodoDialog.ADD_TODO_DIALOG_ACTION_ON_SUBMIT:
      return { ...initialState };

    case addTodoDialog.ADD_TODO_DIALOG_ACTION_ON_CHANGE:
      return { ...state, textValue: action.newValue };

    default:
      return state;
  }
};

export default AddTodoDialogReducer;
