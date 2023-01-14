import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Sheaird/Footer";
import Navebar from "../../Components/Sheaird/Navebar";

const Main = () => {
  return (
    <div className='relative'>
      <div className="fixed top-0 left-0 right-0 z-40" >
        <Navebar />
      </div>
      <div className="mt-24">
        <div className="min-h-[90vh]">
          <Outlet></Outlet>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
