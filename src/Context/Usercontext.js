import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../OutOfTof/Firebase/Firebase";

export const Authcontext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  //sign up email and password
  const signupemail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  //login email and password
  const loginemail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get user;
  useEffect(() => {
    const unsubmite = onAuthStateChanged(auth, (cruser) => {
      setUser(cruser);
    });
    return () => {
      unsubmite();
    };
  }, []);
  let authinfo = { user, signupemail, loginemail, auth };
  return (
    <div>
      <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default UserContext;
