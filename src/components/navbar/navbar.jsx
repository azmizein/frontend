import "./navbar.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice"
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "bootstrap";


const Navbar = () => {
//   const token = localStorage.getItem("token");
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
                <Link to="/" style={{ textDecoration: "none" }} id="fb">
                <h1>Gunung Agung</h1>
                </Link>
                </li>

                <li>
                <Link to="/register" style={{ textDecoration: "none" }} id="fb">
                </Link>
                </li>

                <li id="space1"></li>
                
                <li>
                <input type="text" placeholder=" Search In Gunung Agung" id="search_btn"></input>
                </li>
                 
                  
                <li id="space2"></li>
               
               <li>
                {username ? 
                <DropdownButton id="dropdown-basic-button" title={username}>
                <Link to="/login">Logout</Link>
                </DropdownButton> 
                :
                <DropdownButton id="dropdown-basic-button" title="pls login">
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                </DropdownButton>
                }
               </li>
            </ul>
        </nav>
    </header>
        
    )
}


export default Navbar