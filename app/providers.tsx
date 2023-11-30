import React from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return <Toaster position="top-center">{children}</Toaster>;
};

export default Providers;
