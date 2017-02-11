import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer,PieChart, Pie, Cell} from 'recharts';

const SurveyDone = ({surveys,houses}) => {
  let surveyCount =  surveys.list.length;
  let houseCount = houses.list.length * 5;
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
  surveys: PropTypes.object.isRequired,
  houses: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys.toJS(),
    houses: state.houses.toJS()
  };
};


export default connect(mapStateToProps)(SurveyDone);
