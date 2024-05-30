"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const dashboardLink = "/dashboard";
  const pathname = usePathname();
  const isActive = pathname.startsWith(dashboardLink);
  console.log("isActive", isActive);
  return (
    <div className="h-full">
      <div className="h-full">DashBoard</div>
      <div id="settings" className="text-white">
        Setting
      </div>
    </div>
  );
};

export default Page;
