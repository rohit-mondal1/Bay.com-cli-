import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,

} from "firebase/auth";
import app from "../OutOfTof/Firebase/Firebase";

export const Authcontext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loder, setLoder] = useState(true);
  const provider = new GoogleAuthProvider();

  //sign up email and password
  const signupemail = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login email and password
  const loginemail = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get user;
  useEffect(() => {
    const unsubmite = onAuthStateChanged(auth, (cruser) => {
      setUser(cruser);
      setLoder(false)
    });
    return () => {
      unsubmite();
    };
  }, []);
  let authinfo = { user, signupemail, loginemail, auth , loder };
  return (
    <div>
      <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default UserContext;
