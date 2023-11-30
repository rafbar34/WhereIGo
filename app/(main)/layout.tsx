import React from "react";
import Sidebar from "../components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};
export default layout;
