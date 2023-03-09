import {Link} from "react-router-dom";
import logo from '../logo.svg';

/**
 * This function returns the navigation block,  containing SportSee logo and links.
*/
function HorizontalNav() {
    return (
        <nav id="horizontal-nav">
            <img src={logo} alt="Logo de SportSee" />
            <div className="nav-links">
                <div className="links">
                <Link to="/#" className="nav-link">Accueil</Link>
                <Link to="/#" className="nav-link">Profil</Link>
                <Link to="/#" className="nav-link">Réglage</Link>
                <Link to="/#" className="nav-link">Communauté</Link>
            </div>
            </div>
        </nav>
    );
}
export default HorizontalNav;