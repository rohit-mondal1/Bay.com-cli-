import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Context/Usercontext";

import PostBar from "../../Sheaird/PostBar";
import HomeCart from "./HomeCart";

const Home = () => {
  const { user } = useContext(Authcontext);
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/allpost`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  console.log(post);

  return (
    <div>
      <PostBar />


      <div>
     
        {/* <div className="bg-black/10">{post.map((ap) => <HomeCart key={ap._id}  kk={ap}></HomeCart>)}</div> */}

        {
          // post.localeCompare(a => <HomeCart key={a._id} b={a}></HomeCart>)
        }
      
      
      </div>
    </div>

   
  );
};

export default Home;
