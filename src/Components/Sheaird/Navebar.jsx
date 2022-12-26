import React from 'react';
import { NavLink } from "react-router-dom";
import { MdOutlineTimeline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const Navebar = () => {
  return (
    <div className="flex justify-between p-3 bg-slate-200 text-black">
      <div>
        <NavLink
          to="/home"
          title="Home"
          className={`btn btn-outline border-none text-3xl font-extrabold text-black ${({
            isActive,
          }) => (isActive ? "text-blue-700" : undefined)}`}
        >
          <AiOutlineHome />
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          title="Top Rating"
          className={`btn btn-outline border-none text-3xl font-extrabold text-black ${({isActive}) => (isActive ? "text-blue-700" : undefined)}`}
        >
          <MdOutlineTimeline />
        </NavLink>
      </div>
      <div title="Top Rating">
        <NavLink
          to="/"
          className={`btn btn-outline border-none text-3xl font-extrabold text-black ${({isActive}) => (isActive ? "text-blue-700" : undefined)}`}
        >
          <SiAboutdotme />
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          title="Profile"
          className={`btn btn-outline border-none text-3xl font-extrabold text-black ${({isActive}) => (isActive ? "text-blue-700" : undefined)}`}
        >
          <CgProfile />
        </NavLink>
      </div>
    </div>
  );
};

export default Navebar;