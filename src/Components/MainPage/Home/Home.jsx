import React, { useContext, useState } from "react";
import { Authcontext } from "../../../Context/Usercontext";

import PostBar from "../../Sheaird/PostBar";

const Home = () => {
  const { user } = useContext(Authcontext);
  console.log(user);

  return (
    <div>
      <PostBar />
    </div>
  );
};

export default Home;
