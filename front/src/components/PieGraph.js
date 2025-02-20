import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Tooltip  } from 'recharts';

/**
 * Returns a PieChart component from Recharts, showing the user's progress towards their goal.
 * @param {object} props contains data ( = user's score ) and userId ( = user's id ) 
 */
function PieGraph(props){

    console.log(props);

    let prod = process.env.REACT_APP_ENV === "prod";

    let userPerformances;
    let usersPerformances =   props.data;
    let score;

    if(!prod){
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
    } else score = props.data * 100;

    let graphLegend = document.createElement("div");
    graphLegend.classList.add("pie-graph-legend");
    graphLegend.innerHTML = `<span>${score}%</span> de votre objectif`;
    let graphTitle = document.createElement("p");
    graphTitle.classList.add("pie-graph-title");
    graphTitle.innerText = "Score";
    setTimeout( () => { 
        let pieGraph = document.querySelector(".objectif-pie .recharts-wrapper");
        pieGraph.appendChild(graphLegend);
        pieGraph.appendChild(graphTitle);
    }, 1000);

    let chartData =[
        {
            name: "Score",
            score: score,
            fill : "#E60000"
        },
        {
            name: "total",
            score: 100,
            fill : "none"
        },
    ];

    return (
        <RadialBarChart 
            width={155} 
            height={155} 
            innerRadius="80%" 
            outerRadius="80%" 
            data={chartData} 
            barSize={5}
            startAngle={90}
            endAngle={450}
        >
            <RadialBar minAngle={15} clockWise={false} dataKey="score" />
            <Tooltip />
        </RadialBarChart>

    );
}

let prod = process.env.REACT_APP_ENV === "prod";

if(!prod) {
  PieGraph.propTypes = {
    data: PropTypes.array,
    userId: PropTypes.number,
  };
} else {
  PieGraph.propTypes = {
    data: PropTypes.number,
    userId: PropTypes.number,
  };
}

export default PieGraph;