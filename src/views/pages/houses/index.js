import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HouseForm from 'views/components/house-form';
import HouseList from 'views/components/house-list';
import { houseActions, getVisibleHouses } from 'core/houses';
import {Grid, Container, Button, Icon} from 'semantic-ui-react';

const HousePage = ({houses,removeHouse,updateHouse}) => {
  return (
    <Container fluid>
      <Grid columns={1} centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
      <HouseForm 
        submitAction={houseActions.handleCreateHouse()}
        submitButtonText="Save"
        form="house-add"
        />
     
    </Grid.Column>
        <Grid.Column>
           <HouseList 
        houses = {houses}
        removeHouse = {removeHouse}
        updateHouse = {updateHouse}
        />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

HousePage.propTypes = {
  houses: PropTypes.instanceOf(List),
  //createHouse: PropTypes.func.isRequired,
  // filterHouses: PropTypes.func.isRequired,
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

