import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

function RadarGraph(props) {

  // prod is a boolean : it is true if current environment is prod, otherwise it is false.
  let prod = process.env.REACT_APP_ENV === "prod";

  let userPerformances;

  if(!prod){
    let usersPerformances =   props.data;
    usersPerformances.forEach((user) => {
      if(user.userId === props.userId){
        userPerformances = user;
      }
    });
  } else userPerformances = props.data;

  let newData = [...userPerformances.data];
  newData.forEach((data) => {
    if(data.kind === 1) {
      data.kind = "cardio";
    } else if (data.kind === 2) {
      data.kind = "energy";
    } else if (data.kind === 3) {
      data.kind = "endurance";
    } else if (data.kind === 4) {
      data.kind = "strength";
    } else if (data.kind === 5) {
      data.kind = "speed";
    } else if (data.kind === 6) {
      data.kind = "intensity";
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

RadarGraph.propTypes = {
    data: PropTypes.array,
    userId: PropTypes.number,
};

export default RadarGraph;
