import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ListItemComponent = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={item.name}
      />
      <CardContent>
        ...
      </CardContent>
    </Card>
  );
};


ListItemComponent.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default ListItemComponent;
