import { UserButton } from "@clerk/nextjs";
import React from "react";

const MemberProfile = () => {
  return (
    <div className="flex flex-row justify-center ">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default MemberProfile;
