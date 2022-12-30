import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loder from "../../Components/Sheaird/Loding/Loder";
import { Authcontext } from "../../Context/Usercontext";

const Protect = ({ children }) => {
  const { user , loder} = useContext(Authcontext);
  const location = useLocation();
  if(loder){
    return <Loder/>
  }
  if (user?.uid) {
    return children;
  }

  return  <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default Protect;
