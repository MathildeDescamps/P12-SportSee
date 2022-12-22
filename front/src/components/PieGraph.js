import { RadialBarChart, RadialBar, Legend, Tooltip  } from 'recharts';

function PieGraph(props){
    let userPerformances;
    let usersPerformances =   props.data;
    let score;
    usersPerformances.forEach((user) => {
        if(user.id === props.userId){
            userPerformances = user;
            if(userPerformances.score){
                score = userPerformances.score*100;
            }else if (userPerformances.todayScore) {
                score = userPerformances.todayScore*100;
            }
        }
    });
    let chartData =[
        {
            name: "test",
            score: 20,
            fill : "#E60000"
        },
    ];
    console.log(chartData);
    console.log(typeof score);
    return (
        <RadialBarChart 
            width={155} 
            height={155} 
            innerRadius="90%" 
            outerRadius="80%" 
            data={chartData} 
            barSize={5}
        >
            <RadialBar minAngle={15} clockWise={false} dataKey="score" />
            <Tooltip />
        </RadialBarChart>

        );
}
export default PieGraph;