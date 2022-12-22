import data from "../data";
import { useParams } from 'react-router-dom';
import HorizontalBanner from '../components/HorizontalBanner.js';
import VerticalBanner from '../components/VerticalBanner.js';
import BarGraph from '../components/BarGraph.js';
import LinearGraph from '../components/LinearGraph.js';
import RadarGraph from "../components/RadarGraph";
import PieGraph from "../components/PieGraph";
import KeyData from "../components/KeyData";

function Profile() {

  console.log("Full data : ", data);
  const users = data.USER_MAIN_DATA;
  let usersIds = [];
  data.USER_MAIN_DATA.forEach(mainData => {
    if(!usersIds.includes(mainData.id)) {
      usersIds.push(mainData.id);
    }
  });
  const {id} = useParams();
  let currentUser;
  users.forEach((user) => {
    if(user.id === parseInt(id)) {
      currentUser = user;
    }
  });
  let keyData = currentUser.keyData;
  return (
    <>
      <HorizontalBanner />
        <section className="page-content">
          <h1>Bonjour <span>{currentUser.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div id="left-part">
            <div className="daily-activity">
              <BarGraph data={data.USER_ACTIVITY} userId={currentUser.id} />
            </div>
            <div className="row">
              <div className="average-session">
                <LinearGraph data={data.USER_AVERAGE_SESSIONS} userId={currentUser.id} />
              </div>
              <div className="performance-radar">
                <RadarGraph data={data.USER_PERFORMANCE} userId={currentUser.id} />
              </div>
              <div className="objectif-pie">
                <PieGraph data={data.USER_MAIN_DATA} userId={currentUser.id} />
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
      <VerticalBanner />
    </>
  );

}
export default Profile;