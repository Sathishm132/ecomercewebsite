import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Navbar";

const Rootlayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export default Rootlayout;
