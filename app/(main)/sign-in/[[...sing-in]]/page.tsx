import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
