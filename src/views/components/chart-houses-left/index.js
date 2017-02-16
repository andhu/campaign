import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { getHouseCount } from 'core/houses';
import { getSurveyCount } from 'core/surveys';

import { ResponsiveContainer,PieChart, Pie, Cell} from 'recharts';

const HouseLeft = ({surveyCount,houseCount}) => {
  let HousesLeft = houseCount - surveyCount;
  let endAngle = 360 - (surveyCount/houseCount * 360);
  let data = [{name: 'HousesLeft', value:HousesLeft}];
  return (
    <div style={{height:100+'px'}}>
    <ResponsiveContainer>
      <PieChart>
        <Pie 
        data={data}
        endAngle={endAngle}
        fill="#4286f4" label labelLine={false}/>
      </PieChart>
    </ResponsiveContainer>
    </div>
    
  );
};

HouseLeft.propTypes = {
  surveyCount: PropTypes.number.isRequired,
  houseCount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  houseCount: getHouseCount(state),
  surveyCount : getSurveyCount(state)
});


export default connect(mapStateToProps)(HouseLeft);
