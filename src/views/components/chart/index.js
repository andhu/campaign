import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Chart = ({candidates}) => {
  // Dummy Data for testing
  candidates.list.forEach(candidate => {
    candidate.votes = Math.floor(Math.random() * 500);
  });

  return (
    <LineChart
      width={400}
      height={400}
      data={candidates.list}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>

      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Line dataKey="votes" stroke="#ff7300" strokeWidth={2} />
    </LineChart>
  );
};

Chart.propTypes = {
  candidates: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates.toJS()
  };
};


export default connect(mapStateToProps)(Chart);