"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const dashboardLink = "/dashboard";
  const pathname = usePathname(); // 現在地の/を判定する
  const isActive = pathname.startsWith(dashboardLink);
  console.log("isActive", isActive);
  return (
    <>
      <Link
        className={isActive ? "text-red" : "text-blue"}
        href={`${dashboardLink}#settings`}
      >
        Dashboard
      </Link>
    </>
  );
}
