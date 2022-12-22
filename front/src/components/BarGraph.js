import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function  BarGraph(props) {
  let userActivity;
  let usersActivity =   Array.from(props.data);
  usersActivity.forEach((user) => {
    if(user.userId === props.userId){
      userActivity = user;
    }
  });
userActivity.sessions.forEach((session => {
/* let test = session.day.split("-");
console.log(test[2]); */
}));
  return (
    <BarChart
      data={userActivity.sessions}
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
export default BarGraph;