import meditation from "../assets/meditation.svg";
import swimming from "../assets/swimming.svg";
import bike from "../assets/bike.svg";
import weighs from "../assets/weighs.svg";

function VerticalBanner() {
    return (
        <div id="vertical-banner">
            <div className="categories">
                <img src={meditation} alt="meditation" />
                <img src={swimming} alt="swimming" />
                <img src={bike} alt="bike" />
                <img src={weighs} alt="weighs" />
            </div>
            <span className="copyright" >Copiryght, SportSee 2020</span>
        </div>
    );
}
export default VerticalBanner;