import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps extends React.PropsWithChildren {}

const Layout: React.FunctionComponent<ILayoutProps> = (props): JSX.Element => {
  return (
    <div className="bg-gray-400 p-2">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
