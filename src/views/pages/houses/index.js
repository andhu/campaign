import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HouseForm from 'views/components/house-form';
import { houseActions, getVisibleHouses } from 'core/houses';

const HousePage = () => {
  return (
    <div><HouseForm /></div>
  );
};

HousePage.propTypes = {
  houses: PropTypes.instanceOf(List),
  //createHouse: PropTypes.func.isRequired,
  filterHouses: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  removeHouse: PropTypes.func.isRequired,
  updateHouse: PropTypes.func.isRequired

};

// Connect

const mapStateToProps = state => ({
  houses: getVisibleHouses(state)
});

const mapDispatchToProps = {
  //createHouse: houseActions.createHouse,
  filterHouses: houseActions.filterHouses,
  removeHouse: houseActions.removeHouse,
  updateHouse: houseActions.updateHouse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HousePage);

