import data from "../data";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { GetUserInformations, GetUserActivity, GetUserAverageSessions, GetUserPerformance } from "../services/UserServices";
import HorizontalNav from '../components/HorizontalNav.js';
import VerticalNav from '../components/VerticalNav.js';
import BarGraph from '../components/BarGraph.js';
import LinearGraph from '../components/LinearGraph.js';
import RadarGraph from "../components/RadarGraph";
import PieGraph from "../components/PieGraph";
import KeyData from "../components/KeyData";

/**
 * Returns the different components forming the profile page. 
*/
function ProfilePage() {

  /**
   * prod is a boolean : it is true if current environment is prod, otherwise it is false. 
  */
  let prod = process.env.REACT_APP_ENV === "prod";

  console.log("You are in " + process.env.REACT_APP_ENV + " mode !");

  const [firstname, setFirstname] = useState('');
  const [keyData, setKeyData] = useState({});
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userScore, setUserScore] = useState(null);
  let {id} = useParams();
  id = parseInt(id);
  let currentUser;

  /**
   * When environment is dev : find current user through users ids and url params. 
  */
  if(!prod) {
    const users = data.USER_MAIN_DATA;
    users.forEach((user) => {
      if(user.id === id) {
        currentUser = user;
      }
    });
  }

  /**
   * When environment is prod : fetch data from API through asynchronous functions, once the component is rendered. 
  */
  useEffect(() => {
    if(prod) {
      async function getUserMainData() {
        const {data:{data}} = await GetUserInformations(id);
        setFirstname(data.userInfos.firstName);
        setKeyData(data.keyData);
        if(data.score){
          setUserScore(data.score)
        } else if (data.todayScore){
          setUserScore(data.todayScore);
        }
      };
      async function getUserActivity() {
        const {data} = await GetUserActivity(id);
        setUserActivity(data);
      };
      async function getUserAverageSessions() {
        const {data:{data}} = await GetUserAverageSessions(id);
        setUserAverageSessions(data);
      };
      async function getUserPerformance() {
        const {data:{data}} = await GetUserPerformance(id);
        setUserPerformance(data);
      };
      getUserMainData();
      getUserActivity();
      getUserAverageSessions();
      getUserPerformance();
    } else {
      setKeyData(currentUser.keyData);
    }
  }, []);

  /**
   * Profile page content, in JSX format, for dev environment. 
  */
  const JSXdev = 
    <>
      <HorizontalNav />
        <section className="page-content">
          <h1>Bonjour <span>{currentUser && currentUser.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div id="left-part">
            <div className="daily-activity">
              <BarGraph data={data.USER_ACTIVITY} userId={id} />
            </div>
            <div className="row">
              <div className="average-session">
                <LinearGraph data={data.USER_AVERAGE_SESSIONS} userId={id} />
              </div>
              <div className="performance-radar">
                <RadarGraph data={data.USER_PERFORMANCE} userId={id} />
              </div>
              <div className="objectif-pie">
                <PieGraph data={data.USER_MAIN_DATA} userId={id} />
              </div>
            </div>
          </div>
          <div id="right-part">
            { 
              Object.keys(keyData).map((key, index) => {
                return <KeyData name={key} value={keyData[key]} key={index} />
              })
            }
          </div>
        </section>
      <VerticalNav />
    </>
  ;

  /**
   * Profile page content, in JSX format, for production environment. 
  */
  const JSXprod = 
    <>
      <HorizontalNav />
        <section className="page-content">
          <h1>Bonjour <span>{firstname && firstname}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div id="left-part">
            <div className="daily-activity">
              {userActivity && <BarGraph data={userActivity} userId={id} />}
            </div>
            <div className="row">
              <div className="average-session">
                {userAverageSessions && <LinearGraph data={userAverageSessions} userId={id} />}
              </div> 
              <div className="performance-radar">
                {userPerformance && <RadarGraph data={userPerformance} userId={id} />}
              </div>
              <div className="objectif-pie">
                {userScore && <PieGraph data={userScore} userId={id} /> }
              </div>
            </div>
          </div>
          <div id="right-part">
            { 
              Object.keys(keyData).map((key, index) => {
                return <KeyData name={key} value={keyData[key]} key={index} />
              })
            }
          </div>
        </section>
      <VerticalNav />
    </>
  ;

  if(prod) {
    return JSXprod;
  } else {
    return JSXdev;
  }

}
export default ProfilePage;