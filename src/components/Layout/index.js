import React from "react";
import AddsBar from "../AddsBar";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
const Layout = () => {
  return (
    <>
      <AddsBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
