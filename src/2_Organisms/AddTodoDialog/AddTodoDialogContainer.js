import { connect } from 'react-redux';

import AddTodoDialogComponent from './AddTodoDialogComponent';
import * as types from './AddTodoDialogActionTypes';

const mapStateToProps = (state) => ({
  isShow: state.addTodoDialog.isShow,
  textValue: state.addTodoDialog.textValue,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseDialog: () => {
    dispatch({ type: types.ADD_TODO_DIALOG_ACTION_ON_CLOSE });
  },
  onSubmit: (value) => {
    dispatch({ type: types.ADD_TODO_DIALOG_ACTION_ON_SUBMIT, value });
  },
  onChangeValue: (newValue) => {
    dispatch({ type: types.ADD_TODO_DIALOG_ACTION_ON_CHANGE, newValue });
  },
});

const AddTodoDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodoDialogComponent);

export default AddTodoDialogContainer;
