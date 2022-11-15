import "./login.css"
import {Link, useNavigate} from "react-router-dom"
import { useState, useContext } from "react";

const Login = () => {



    return ( 
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
          <form>
            <input type="text" 
            placeholder="NIM" 
            name="nim"
           
            />
            <input type="password" 
            placeholder="Password"
            name="password" 
           />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Login