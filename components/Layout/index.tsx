import React from "react";

import Header from "../Header";
import NavigationBar from "../Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <main className="flex-1">{children}</main>
        <NavigationBar />
      </div>
    </div>
  );
};

export default Layout;
