// auth/layout/AuthLayout.js
import React from "react";
import AuthNav from "@/components/layout/AuthNav"; // Make sure this path is correct

const AuthLayout = ({ children }) => {
  return (
    <div>
      <AuthNav />
      <main>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
