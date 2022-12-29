import React from "react";
import { Link } from "react-router-dom";

const PostForm = () => {
  return (
    <div className="bg-black/10  px-14 my-3 py-3 ">
      <Link to="/profile">
        <div className="flex gap-3 items-center ">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <h1>name</h1>
        </div>
      </Link>
      <form>
        <textarea
          name="text"
          style={{ resize: "none", overflow: "hidden" }}
          placeholder="What's on your mind ?"
          className="input input-bordered input-lg w-full  border-none mt-3 mb-2 h-32"
        ></textarea>

        <input
          type="file"
          name="file"
          className="file-input file-input-bordered file-input-lg w-full  "
        />

        <button className="btn w-full btn-primary my-3">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
