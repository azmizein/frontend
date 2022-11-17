
import { Routes, Route} from "react-router-dom";
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import { VerificationPage } from "./pages/VerificationPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";
import { useEffect } from "react";
import Navbar from "./pages/navbar/navbar";


function App () {
  const dispatch = useDispatch ();
  const token = localStorage.getItem("token");
  console.log(token)

  const keepLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:2000/auth/keepLogin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      dispatch(login(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verification/:token" element={<VerificationPage/>}/>
      </Routes>
    </div>
  )
}

export default App;