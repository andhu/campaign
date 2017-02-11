import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer,PieChart, Pie, Cell} from 'recharts';

const HouseLeft = ({surveys,houses}) => {
  let surveyCount =  surveys.list.length;
  let houseCount = houses.list.length * 5;
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
  surveys: PropTypes.object.isRequired,
  houses: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys.toJS(),
    houses: state.houses.toJS()
  };
};


export default connect(mapStateToProps)(HouseLeft);
