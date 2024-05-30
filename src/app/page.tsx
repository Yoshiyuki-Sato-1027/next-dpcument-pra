"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Home() {
  const dashboardLink = "/dashboard";
  const pathname = usePathname(); // 現在地の/を判定する
  const isActive = pathname.startsWith(dashboardLink);
  console.log("isActive", isActive);
  const router = useRouter();
  return (
    <>
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
    </>
  );
}
