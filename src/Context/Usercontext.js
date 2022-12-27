import React, { createContext, useState } from "react";

export const Authcontext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  let authinfo = { user };
  return (
    <div>
      <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default UserContext;
