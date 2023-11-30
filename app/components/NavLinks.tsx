import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <ul className="menu h-screen px-5 rounded-box pt-6 flex items-center">
      <li>
        <Link href={"/chat"}>Chat</Link>
      </li>
      <li>
        <Link href={"/tours/new-tour"}>New Tour</Link>
      </li>
      <li>
        <Link href={"/tours"}>Tours</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
