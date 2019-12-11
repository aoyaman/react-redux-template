import { connect } from 'react-redux';

import AddBoardDialogComponent from './AddBoardDialogComponent';
import * as types from './AddBoardDialogActionTypes';

const mapStateToProps = (state) => ({
  isShow: state.addBoardDialog.isShow,
  textValue: state.addBoardDialog.textValue,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseDialog: () => {
    dispatch({ type: types.ADD_BOARD_DIALOG_ACTION_ON_CLOSE });
  },
  onSubmit: (value) => {
    dispatch({ type: types.ADD_BOARD_DIALOG_ACTION_ON_SUBMIT, value });
  },
  onChangeValue: (newValue) => {
    dispatch({ type: types.ADD_BOARD_DIALOG_ACTION_ON_CHANGE, newValue });
  },
});

const AddBoardDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBoardDialogComponent);

export default AddBoardDialogContainer;
