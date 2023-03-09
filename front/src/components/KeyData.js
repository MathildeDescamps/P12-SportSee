import PropTypes from 'prop-types';
import flame from "../assets/flame.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";

function  KeyData(props) {
    let name;
    let valueUnity;
    let icon;
    if(props.name === "calorieCount") {
        name = "Calories";
        valueUnity = "kCal";
        icon = {flame};
    } else if (props.name === "proteinCount") {
        name = "Proteines";
        valueUnity = "g";
        icon = {chicken};
    }
    else if (props.name === "carbohydrateCount") {
        name = "Glucides";
        valueUnity = "g";
        icon = {apple};
    } else if (props.name === "lipidCount") {
        name = "Lipides";
        valueUnity = "g";
        icon = {cheeseburger};
    }
    return (
        <div className="key-data">
            <div className={`icon-wrapper ${props.name}`}>
                {
                    Object.keys(icon).map((key, index) => {
                        return <img src={icon[key]} key={index} alt={props.name} />
                    })
                }   
            </div>
            <div className="text-wrapper">
                <p>{props.value}{valueUnity}</p>
                <p>{name}</p>
            </div>
        </div>
    )

}

KeyData.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
  };

export default KeyData;