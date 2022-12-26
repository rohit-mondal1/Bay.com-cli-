import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Sheaird/Footer";
import Navebar from "../../Components/Sheaird/Navebar";

const Main = () => {
  return (
    <div>
      <Navebar />
      <div className="min-h-[90vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
