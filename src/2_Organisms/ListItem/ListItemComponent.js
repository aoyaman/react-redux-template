import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  todo: {
    padding: theme.spacing(1, 0),
  },
}));

const ListItemComponent = ({ item, onSelectTodo, onAddTodo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={item.name}
      />
      <CardContent>
        {item.todos.map((todo, index) => (
          <div className={classes.todo}>
            <Button variant="contained" color="primary" fullWidth onClick={() => onSelectTodo(index)}>
              { todo.name }
            </Button>
          </div>
        ))}
        <Button variant="contained" onClick={() => onAddTodo()}>
          新しいTODOを作成する
        </Button>
      </CardContent>
    </Card>
  );
};


ListItemComponent.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf({
      name: PropTypes.string,
    }),
  }).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onSelectTodo: PropTypes.func.isRequired,
};

export default ListItemComponent;
