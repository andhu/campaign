import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { getHouseCount } from 'core/houses';
import { getSurveyCount } from 'core/surveys';

import { ResponsiveContainer,PieChart, Pie, Cell} from 'recharts';

const SurveyDone = ({surveyCount,houseCount}) => {
  let data = [{name: 'Surveys', value: surveyCount}];
  let endAngle = 360 - ((houseCount-surveyCount)/houseCount * 360);
  return (
    <div style={{height:100+'px'}}>
    <ResponsiveContainer>
      <PieChart>
        <Pie 
        data={data}
        endAngle={endAngle}
        fill="#82ca9d" label labelLine={false}/>
      </PieChart>
    </ResponsiveContainer>
    </div>
    
  );
};

SurveyDone.propTypes = {
  surveyCount: PropTypes.number.isRequired,
  houseCount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  houseCount: getHouseCount(state),
  surveyCount : getSurveyCount(state)
});


export default connect(mapStateToProps)(SurveyDone);
