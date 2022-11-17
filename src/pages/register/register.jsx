import "./register.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import React from "react"
import {Navigate} from "react-router-dom"
import Swal from 'sweetalert2'


const Register = () => {

  const [move, setMove] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const{name, value} = e.target
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]:value,
      }
    })   
  };

  const { username, email, password} = inputs

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:2000/auth/register", inputs);
      // alert(result.data)
      Swal.fire({
        title:'Register Success Please Check Your Email, For Get your NIM and Verify Your Account',
        icon:'success'
      }
      )
      setMove(true)
    } catch (err) {
      Swal.fire(err.response.data);
      // Swal.fire({
      //   title: 'Email Already Taken',
      //   icon: 'error'
      // })
    }
  };

    return move ? (
      <Navigate to="/login" replace={true}/> 
    ) : ( 
    <>
     <div className="register">
      <div className="card">
        <div className="left">
          <h1>Welcome Dude</h1>
          <p>
            Welcome to ours website please enter your account besdide here thank you.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text"
             placeholder="Username" 
             name="username" 
             onChange={handleChange}
             value={username}/>
            <input type="email" 
            placeholder="Email" 
            name="email" 
            onChange={handleChange} 
            value={email}/>
            <input type="password" 
            placeholder="password" 
            name="password" 
            onChange={handleChange}
            value={password}/>
                      
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
    </>

    )
}

export default Register