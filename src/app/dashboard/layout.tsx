import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen">{children}</div>;
};

export default DashboardLayout;
