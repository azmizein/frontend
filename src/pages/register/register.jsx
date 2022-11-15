import "./register.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"


const Register = () => {

  const [inputs, setInputs] = useState({
    nim: "",
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    const{name, value} = e.target
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]:value,
      }
    })   
  };

  const {nim, username, email, password} = inputs

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };


    return ( 
        <div className="register">
      <div className="card">
        <div className="left">
          <h1>Welcome Dude</h1>
          <p>
            Welcome to ours website please enter your account besdide here thank you.
          </p>
          <span>Do you have an account?</span>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="number"
             placeholder="NIM"
             name="nim" 
             onChange={handleChange}
             value={nim} />
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
                        {
            err && err}

            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Register