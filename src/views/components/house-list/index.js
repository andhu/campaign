import { List } from 'immutable';
import React, { PropTypes} from 'react';

import HouseItem from 'views/components/house-item';

const HouseList = ({houses, removeHouse, updateHouse}) => {
  let HouseItems = houses.map((house, index) => {
    return (
      <HouseItem
        key={index}
        house={house}
        removeHouse={removeHouse}
        updateHouse={updateHouse}
      />
    );
  });
  return (
    <div>House List
      {HouseItems}
    </div>
  );
};

HouseList.propTypes = {
  houses: PropTypes.instanceOf(List),
  removeHouse: PropTypes.func.isRequired,
  updateHouse: PropTypes.func.isRequired
};

export default HouseList;
