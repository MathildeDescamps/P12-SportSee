import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function LinearGraph(props) {

    let userSessions;
    let usersSessions =   props.data;
    usersSessions.forEach((user) => {
        if(user.userId === props.userId){
        userSessions = user;
        }
    });

     return (
            <LineChart
            width={155}
            height={155}
            data={userSessions.sessions}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <p className='legend'>Durée moyenne des sessions</p>
                <XAxis dataKey="day" />
                <YAxis hide={true} />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.4)" />
            </LineChart>
    );
}
export default LinearGraph;