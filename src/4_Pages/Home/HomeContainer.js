import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';

const mapStateToProps = (state) => ({
  boardList: state.home.boardList,
  selectedBoard: state.home.selectedBoard,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectBoard: (index) => {
    dispatch({ type: 'ON_SELECT_BOARD', index });
  },
  onAddBoard: () => {
    dispatch({ type: 'ON_ADD_BOARD' });
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);

export default HomeContainer;
