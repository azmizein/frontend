import { Routes, Route} from "react-router-dom";
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";
import { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/HomePage";
import Loginadmin from "./pages/login/loginAdmin";
import { Admin } from "./pages/adminDashboard";


function App () {
  const dispatch = useDispatch ();
  const token = localStorage.getItem("token");
  console.log(token)

  const keepLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:2000/keepLogin`, {
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

  const keepLoginAdmin = async () =>{
    try{
      const result = await axios.get(`http://localhost:2000/keepLoginAdmin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result.data);
      dispatch(login(result.data));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    keepLogin();
    keepLoginAdmin();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/loginAdmin" element={<Loginadmin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/adminDashboard" element={<Admin/>}/>

      </Routes>
    </div>
  )
}

export default App;