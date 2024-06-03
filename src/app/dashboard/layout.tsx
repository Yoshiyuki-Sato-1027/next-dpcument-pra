import React, { Suspense } from "react";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-screen">{children}</div>
    </Suspense>
  );
};

export default DashboardLayout;
