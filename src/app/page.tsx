"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Home() {
  const dashboardLink = "/dashboard";
  const pathname = usePathname(); // 現在地の/を判定する
  const isActive = pathname.startsWith(dashboardLink);
  console.log("isActive", isActive);
  const router = useRouter();
  const searchParams = useSearchParams();

  // URLに値を追加する
  const updateSorting = (sortOrder: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    // こっちはまえのじょうたいにもどれる
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  // URLに値を追加する
  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${pathname}`;
    // こっちはまえのじょうたいにもどれない
    window.history.replaceState(null, "", newPath);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () =>
      await axios.get("https://jsonplaceholder.typicode.com/todos/1"),
  });
  console.log("data", data);
  // if (!isLoading) return;

  return (
    <>
      {isLoading && <Loading />}
      <p>{data?.data?.userId ?? ""}</p>
      <Link
        className={isActive ? "text-red" : "text-blue"}
        href={`${dashboardLink}#settings`}
        scroll={false}
      >
        Dashboard
      </Link>
      <button type="button" onClick={() => router.push("/dashboard")}>
        RouterのDashboard
      </button>
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
      <button onClick={() => switchLocale("en")}>English</button>
      <button onClick={() => switchLocale("fr")}>French</button>
    </>
  );
}
