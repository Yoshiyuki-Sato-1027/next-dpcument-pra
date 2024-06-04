"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Loading from "../loading";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";

const Page = () => {
  const dashboardLink = "/dashboard";
  const pathname = usePathname();
  const isActive = pathname.startsWith(dashboardLink);
  console.log("isActive", isActive);
  const postData = async (data: any) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () =>
      await axios.get("https://jsonplaceholder.typicode.com/todos/1"),
  });
  console.log("data", data);
  const { mutateAsync } = useMutation({
    mutationFn: postData,
  });
  const handlePostData = async () => {
    try {
      const data = { title: "foo", body: "bar", userId: 1 };
      await mutateAsync(data);
      console.log("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
    }
    revalidatePath(dashboardLink);
    redirect(dashboardLink);
  };
  const router = useRouter();
  return (
    <>
      {isLoading && <Loading />}
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
      <p>{data?.data?.userId ?? ""}</p>
      <div className="h-full">
        <div className="h-full">DashBoard</div>
        <div id="settings" className="text-white">
          Setting
        </div>
        <button onClick={() => handlePostData()}>POSTをたたく</button>
      </div>
    </>
  );
};

export default Page;
