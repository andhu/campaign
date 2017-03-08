import React from 'react';
import Chart from 'views/components/chart';
import PartyVotesChart from 'views/components/chart-party-votes';

const StatsPage = ({}) => {

  return (
    <div>stats
      <div>candidates
        <Chart />
      </div>
      <div>parties
        <PartyVotesChart />
      </div>
    </div>
  );
};

export default StatsPage;
