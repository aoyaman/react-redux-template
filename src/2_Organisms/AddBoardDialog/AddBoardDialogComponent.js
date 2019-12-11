import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  context: {
    padding: theme.spacing(3, 2),
  },
}));

const AddBoardDialogComponent = ({
  isShow, onCloseDialog, onChangeValue, textValue, onSubmit,
}) => {
  const classes = useStyles();
  return (
    <Dialog open={isShow} onClose={onCloseDialog} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">ボードの追加</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.context}>
          「仕事」や「プライベート」など、Todoを好きなボードで切り分けて管理できます。
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="ボードの名前"
          value={textValue}
          fullWidth
          onChange={(event) => onChangeValue(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} color="primary">
          キャンセル
        </Button>
        <Button onClick={() => onSubmit(textValue)} color="primary">
          作成
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddBoardDialogComponent.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired,
};

export default AddBoardDialogComponent;
