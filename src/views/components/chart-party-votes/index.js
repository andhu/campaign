import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { getPartyVoteCount } from 'core/surveys';


const ChartPartyVotes = ({votes}) => {
  let v = [];
  for (let party in votes){
    v.push({ 'party': party, 'votes': votes[party]});
  }
  return (
    <BarChart width={600} height={300} data={v}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="party"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="votes" fill="#8884d8" />
      </BarChart>
  );
};

ChartPartyVotes.propTypes = {
  votes: PropTypes.array.isRequired
};

const mapStateToProps = (state) =>{
  return {
    votes: getPartyVoteCount(state)
  }
};

export default connect(mapStateToProps)(ChartPartyVotes);
