import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";
const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
