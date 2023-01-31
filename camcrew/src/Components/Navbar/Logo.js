import { NavLink} from "react-router-dom";
import logo from "../../Assets/Logo.png"

function Logo(){
    return(
        <div className="logocontainer">
            <NavLink to="Home">
            <img className="logoimage" src={logo} alt="Logo"></img></NavLink>

        </div>
    )
}

export default Logo;