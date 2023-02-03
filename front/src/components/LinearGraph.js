import React from 'react';
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';

function LinearGraph(props) {

    let prod = process.env.REACT_APP_ENV === "prod";

    let userSessions;

    if(!prod){
        let usersSessions =   props.data;
        usersSessions.forEach((user) => {
            if(user.userId === props.userId){
            userSessions = user;
            }
        });
    } else {
        userSessions = props.data;
    }

    let newData = [...userSessions.sessions];
    newData.forEach((session) => {
        if(session.day === 1) {
            session.day = "L";
        } else if (session.day === 2) {
            session.day = "M";
        } else if (session.day === 3) {
            session.day = "M";
        } else if (session.day === 4) {
            session.day = "J";
        } else if (session.day === 5) {
            session.day = "V";
        } else if (session.day === 6) {
            session.day = "S";
        } else if (session.day === 7) {
            session.day = "D";
        }
    });

    let graphTitle = document.createElement("p");
    graphTitle.classList.add("linear-graph-title");
    graphTitle.innerText = "Durée moyenne des sessions";
    setTimeout( () => { 
        let linearGraph = document.querySelector(".average-session .recharts-wrapper");
        linearGraph.appendChild(graphTitle);
    }, 1000);

    return (
        <AreaChart width={155} height={155} data={userSessions.sessions} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
            <XAxis dataKey="day" />
            <Tooltip 
                dataKey="sessionLengths" 
                itemStyle={{
                    color: 'black',
                    background: 'white',
                    width: 'fit-content',
                }}
                labelStyle={{display: 'none'}}
            />
            <Area type="monotone" dataKey="sessionLength" stroke="white" fillOpacity={1} fill="none" />
        </AreaChart>
    );
}
export default LinearGraph;