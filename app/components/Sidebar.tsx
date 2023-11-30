import { UserButton, currentUser } from "@clerk/nextjs";
import React from "react";
import SidebarHeader from "./SidebarHeader";
import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="bg-base-200 flex-col items-center py-10 w-36 sm:w-56">
        <MemberProfile />
        <SidebarHeader />
        <NavLinks />
      </div>
      <div className="px-10 py-12 w-full">{children}</div>
    </div>
  );
};
export default Sidebar;
