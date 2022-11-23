import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
const url = "http://localhost:2000/verification";

export const VerificationPage = () => {
  const [msg, setMsg] = useState("Loading...");
  const params = useParams();

  const verifyToken = async () => {
    try {
      const res = await Axios.get(url, {
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      });
      setMsg(res.data);
    } catch (err) {
      setMsg("Verification Failed");
    }
  };

  useEffect(() => {
    verifyToken();
  });

  return (
    <div>
      Verification Page
      <div> 
        {msg}
      </div>
    </div>
  );
};
