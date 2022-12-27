import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Authcontext } from "../../Context/Usercontext";

const Protect = ({ children }) => {
  const { user } = useContext(Authcontext);
  const location = useLocation();
  if (user.uid) {
    return children;
  }

  return <navigator to="/login"></navigator>;
};

export default Protect;
