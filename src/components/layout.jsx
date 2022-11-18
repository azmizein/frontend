import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};