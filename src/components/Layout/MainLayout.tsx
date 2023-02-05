import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

type TLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: TLayout) => {
  return (
    <>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
