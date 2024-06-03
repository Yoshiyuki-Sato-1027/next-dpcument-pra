"use client";

import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import Loading from "../loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Page = () => {
  const dashboardLink = "/dashboard";
  const pathname = usePathname();
  const isActive = pathname.startsWith(dashboardLink);
  console.log("isActive", isActive);
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () =>
      await axios.get("https://jsonplaceholder.typicode.com/todos/1"),
  });
  console.log("data", data);
  return (
    <>
      {isLoading && <Loading />}
      <p>{data?.data?.userId ?? ""}</p>
      <div className="h-full">
        <div className="h-full">DashBoard</div>
        <div id="settings" className="text-white">
          Setting
        </div>
      </div>
    </>
  );
};

export default Page;
