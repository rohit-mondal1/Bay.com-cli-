import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import PostBar from "../../Sheaird/PostBar";

const Profile = () => {
  return (
    <div>
      {/* <div className="flex flex-col  max-w-[100%] p-6 shadow-md rounded-xl sm:px-12 text-gray-100">
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square "
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
            <div className="justify-start">
              <p className="px-5 text-xs sm:text-base text-gray-100">
                <span className="text-xl font-bold text-slate-200">
                  ffffffff :
                </span>
                555555
              </p>
              <p className="px-5 text-xs sm:text-base text-gray-100">
                <span className="text-xl font-bold text-slate-200">
                  ffffffff :
                </span>
                Full-stack
              </p>
              <p className="px-5 text-xs sm:text-base text-gray-100">
                <span className="text-xl font-bold text-slate-200">
                  ffffffff :
                </span>
                Full-stack
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* new  */}

      <div className="mb-6 ">
        <div className="bg-slate-700/20 pt-12 ">
          <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square "
          />
        </div>

        {/* about sections */}
        <div className="my-2 space-y-1">
          <h2 className="text-xl text-center font-semibold sm:text-2xl my-3">
            Leroy Jenkins
          </h2>

          <p className=" text-xs text-center mx-20 rounded-md p-4 sm:text-base text-gray-100 bg-slate-700/10 ">
            bio
          </p>
          <div className="justify-start ">
            <p className="px-5 mt-7 text-xs sm:text-base text-gray-100 flex items-center gap-2">
              <span className="text-xl font-bold text-slate-200">
                <MdOutlineAlternateEmail />
              </span>
              email
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-100 flex items-center gap-2">
              <span className="text-xl font-bold text-slate-200">
                <GoLocation />
              </span>
              location
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-100 flex items-center gap-2">
              <span className="text-xl font-bold text-slate-200">
                ffffffff :
              </span>
              educations
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-100 flex items-center gap-2">
              <span className="text-xl font-bold text-slate-200">
                ffffffff :
              </span>
              Full-stack
            </p>
          </div>
        </div>
      </div>

      <div>
        <PostBar />
      </div>
      {/* my all post  */}
      <div className="bg-black/10">my post</div>
    </div>
  );
};

export default Profile;
