import "./navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faFacebookMessenger} from "@fortawesome/free-brands-svg-icons"
import {faUserFriends, faUsers, faHouse, faBell, faUser, faSearch} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice"



const Navbar = () => {

  const { username } = useSelector((state) => state.userSlice.value);
  const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        localStorage.removeItem("token");
      };



    return(
        <header>
        <nav>
            <ul>
                <li>
                <Link to="/login" style={{ textDecoration: "none" }} id="fb">
                <FontAwesomeIcon icon={faFacebookF}/>
                </Link>         
                </li>

                <li>
                <input type="text" placeholder="Find in Facebook" id="search_btn"></input>
                </li>
                
                <li id="space1"></li>
                
                <li> <a class="tooltip" data-tooltip="Home" href="#" id="home"> <FontAwesomeIcon icon={faHouse}/></a> </li>
                <li> <a class="tooltip" data-tooltip="Friend" href="#" id="friend"> <FontAwesomeIcon icon={faUserFriends}/></a> </li>
                <li> <a class="tooltip" data-tooltip="Group" href="#" id="group"> <FontAwesomeIcon icon={faUsers}/> </a></li>
                      
                <li id="space2"></li>
                
                <li>
                    <Link to="/">
                    <button  onClick={onLogout} class="tooltip" data-tooltip="Logout" id="btn_plus">Logout</button>
                    </Link>
                </li>
                {/* <li> <button class="tooltip" data-tooltip="Add" id="btn_plus"><i class="fas fa-plus    "></i></button> </li> */}
                <li> <button class="tooltip" data-tooltip="Profile" id="btn_profile"> <FontAwesomeIcon icon={faUser}/>{username}</button>  </li>
            </ul>
        </nav>
    </header>
        
    )
}


export default Navbar