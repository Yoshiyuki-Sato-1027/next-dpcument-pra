"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const dashboardLink = "/dashboard";
  const pathname = usePathname();
  const isActive = pathname.startsWith(dashboardLink);
  console.log("isActive", isActive);
  return <div>page</div>;
};

export default Page;
