import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Context/Usercontext";

import PostBar from "../../Sheaird/PostBar";
import Allpostcart from "./Allpostcart";


const Home = () => {
  const { user } = useContext(Authcontext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/allpost`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  

  return (
    <div>
      <PostBar />


      <div>
     
      {posts?.length ? (
        <div className="bg-black/10">{posts.map((ap) => <Allpostcart key={ap._id}  kk={ap}></Allpostcart>)}</div>
      ) : undefined}
      
      
      </div>
    </div>

   
  );
};

export default Home;
