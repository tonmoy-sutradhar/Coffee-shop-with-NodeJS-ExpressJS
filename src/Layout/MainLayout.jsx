import React from "react";
import Headers from "../Components/Headers";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Headers></Headers>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
