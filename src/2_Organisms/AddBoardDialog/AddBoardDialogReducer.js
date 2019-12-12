import * as home from '../../4_Pages/Home/HomeActionTypes';
import * as addBoardDialog from './AddBoardDialogActionTypes';

const initialState = {
  isShow: false,
  textValue: '',
};

const AddBoardDialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case home.HOME_ACTION_ON_ADD_BOARD_BUTTON:
      return { ...state, isShow: true };

    case addBoardDialog.ADD_BOARD_DIALOG_ACTION_ON_CLOSE:
    case addBoardDialog.ADD_BOARD_DIALOG_ACTION_ON_SUBMIT:
      return { ...initialState };

    case addBoardDialog.ADD_BOARD_DIALOG_ACTION_ON_CHANGE:
      return { ...state, textValue: action.newValue };

    default:
      return state;
  }
};

export default AddBoardDialogReducer;
