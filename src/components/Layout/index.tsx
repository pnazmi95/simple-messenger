import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps extends React.PropsWithChildren {}

const Layout: React.FunctionComponent<ILayoutProps> = (props): JSX.Element => {
  return (
    <div className="bg-gray-400 p-2 flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-[calc(100vh-4rem)] pt-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
