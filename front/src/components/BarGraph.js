import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

/**
 * Returns a BarChart component from Recharts, describing the user's activity through weight and calories.
 * @param {object} props contains data ( = user's activity ) and userId ( = user's id ) 
 */
function  BarGraph(props) {

  let prod = process.env.REACT_APP_ENV === "prod";

  let userActivity;

  /**
   * If environment is dev, we received each user's activity in props.data.
   * If environment is prod, we only received the current user's activity.
  */
  if(!prod) {
    let usersActivity =   Array.from(props.data);
    usersActivity.forEach((user) => {
      if(user.userId === props.userId){
        userActivity = user;
      }
    });
  } else {
    userActivity = props.data;
  }

  return (
    <BarChart
      data={prod ? userActivity.data.sessions : userActivity.sessions}
      width={500}
      height={320}
      margin={{
        top: 10,
        right: 10,
        left: 10,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="1" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis dataKey="calories" orientation="right"/>
      <Tooltip separator=""  />
      <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
      <Bar dataKey="calories" fill="#E60000" barSize={7} />
    </BarChart>
  )
}

let prod = process.env.REACT_APP_ENV === "prod";

if(!prod){
  BarGraph.propTypes = {
    data: PropTypes.array,
    userId: PropTypes.number,
  };
} else {
  BarGraph.propTypes = {
    data: PropTypes.object,
    userId: PropTypes.number,
  };
}

export default BarGraph;