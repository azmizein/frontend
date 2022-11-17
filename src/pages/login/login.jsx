import "./login.css"
import {Link} from "react-router-dom"
import { useState, useRef } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom"
import { login } from "../../redux/userSlice";
import Swal from 'sweetalert2'

const url = "http://localhost:2000/auth/login"

const Login = () => {

const nim = useRef("");
const password = useRef("");
const dispatch = useDispatch();
const [move, setMove] = useState(false);
console.log (move)


  const onLogin = async () =>{
    try{
      console.log(nim.current.value,)
      console.log( password.current.value)
      const user = {
        nim: nim.current.value,
        password: password.current.value,
      }
      const result = await axios.post(url, user);
      console.log(result)
      dispatch(login(result.data.user));
      localStorage.setItem("token", result.data.token);
      setMove(true);
      Swal.fire({
        title:"Enjoy",
        icon: "success"
      })
    }catch (err) {
      // alert(err.respoonse.data);
      console.log(err)
    }
  };

    return move ? (
      <Navigate to="/" replace={true}/> 
    ) : (
     <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Dude</h1>
          <p>
            Welcome to ours website please enter your account besdide here thank you.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button> 
          </Link> 
        
        </div>
        <div className="right">
          <h1>Login</h1>
          
            <input type="text" 
            placeholder="NIM" 
            ref={nim}
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

export default Login