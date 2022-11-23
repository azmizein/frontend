import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const Admin= () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {/* {!token && <Navigate to="/" replace={true} />} */}
      <div>Adminpage</div>
    </>
  );
};