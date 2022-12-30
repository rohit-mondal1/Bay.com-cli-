import React, { useContext, useEffect, useState } from "react";
import { MdCastForEducation, MdOutlineAlternateEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import PostBar from "../../Sheaird/PostBar";
import { Authcontext } from "../../../Context/Usercontext";
import MypostCart from "./MypostCart";

const Profile = () => {
  const { user , userdata } = useContext(Authcontext);
  const [post, setPost] = useState("");

  console.log("object", post);

  useEffect(() => {
    fetch(`http://localhost:8000/posts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [user?.email]);

  return (
    <div>
      {/* new  */}

      <div className="mb-6 ">
        <div className="bg-slate-700/20 pt-12 ">
          <img
            src={userdata?.imgurl}
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square "
          />
        </div>

        {/* about sections */}
        <div className="my-2 space-y-1">
          <h2 className="text-xl text-center font-semibold sm:text-2xl my-3">
            {userdata?.naem}
          </h2>

          <p className=" text-xs text-center mx-20 rounded-md p-4 sm:text-base text-gray-100 bg-slate-700/10 ">
            bio
          </p>
          <div className="justify-start ">
            <p className="px-5 mt-7 text-xs sm:text-base text-gray-100 flex items-center gap-2">
              <span className="text-xl font-bold text-slate-200">
                <MdOutlineAlternateEmail />
              </span>
              {userdata?.email}
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-100 flex items-center gap-2 my-2">
              <span className="text-xl font-bold text-slate-200">
                <GoLocation />
              </span>
              {userdata?.location}
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-100 flex items-center gap-2 my-2">
              <span className="text-xl font-bold text-slate-200">
                <MdCastForEducation />
              </span>
              educations
            </p>
          </div>
        </div>
      </div>

      <div>
        <PostBar />
      </div>
      {/* my all post  */}

      {post?.length ? (
        <div className="bg-black/10">{post.map((ap) => <MypostCart key={ap._id}  kk={ap}></MypostCart>)}</div>
      ) : undefined}
    </div>
  );
};

export default Profile;
