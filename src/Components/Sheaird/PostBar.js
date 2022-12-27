import React from 'react';
import { BsFillFilePostFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostBar = () => {
  return (
    <div className="my-3 flex justify-between px-10 bg-black/10  py-5">
      <div>
      <Link to="/profile">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        </Link>
      </div>
      <Link to="/post-from">
        <div className="flex items-center gap-2 font-semibold text-xl">
          <h1>Post </h1> /
          <BsFillFilePostFill className="text-blue-300" />
        </div>
      </Link>
    </div>
  );
};

export default PostBar;