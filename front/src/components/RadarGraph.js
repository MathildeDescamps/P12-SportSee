import { UNSAFE_getPathContributingMatches } from '@remix-run/router';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarGraph(props) {
    let userPerformances;
    let usersPerformances =   props.data;
    usersPerformances.forEach((user) => {
        if(user.userId === props.userId){
          userPerformances = user;
        }
    });

    return (
    <RadarChart
      width={155}
      height={155}
      data={userPerformances.data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <Radar
        dataKey="value"
        fill="#FF0101B2"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
export default RadarGraph;
