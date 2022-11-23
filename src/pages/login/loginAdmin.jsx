import "./login.css"
import { useState, useRef } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom"
import { login } from "../../redux/userSlice";
import Swal from 'sweetalert2'

const url = "http://localhost:2000/loginAdmin"

const Loginadmin= () => {

const data = useRef("");
const password = useRef("");
const dispatch = useDispatch();
const [move, setMove] = useState(false);
console.log (move)


  const onLogin = async () =>{
    try{
      console.log(data.current.value,)
      console.log( password.current.value)
      const admin = {
        data: data.current.value,
        password: password.current.value,
      }
      const result = await axios.post(url, admin);
      console.log(result)
      dispatch(login(result.data.admin));
     localStorage.setItem("token", result.data.token);
      setMove(true);
      Swal.fire({
        title:"Enjoy",
        icon: "success"
      })
    }catch (err) {
      Swal.fire(err.response.data);
    }
  };

    return move ? (
      <Navigate to="/adminDashboard" replace={true}/> 
    ) : (

        <div class="login">
        <div class="card2">
          <div class="right">
            <h1>Login</h1>
              <input type="text" 
              placeholder="Email or Username" 
              ref={data}
              />
              <input type="password" 
              placeholder="Password"
              ref={password}       
              />
              <button onClick={onLogin}>Login</button>
            
          </div>
        </div>
      </div>
    )
}

export default Loginadmin