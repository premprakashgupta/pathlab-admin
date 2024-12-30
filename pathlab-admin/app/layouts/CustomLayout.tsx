"use client"
import Image from "next/image";
import type { ReactNode } from "react";
import "./custom-layout.css";
import { useAuth } from "@/lib/hooks";
import Sidebar from "../super/components/Sidebar";

interface Props {
  readonly children: ReactNode;
}

export default function CustomLayout({ children }: Props) {
  useAuth(); // Initialize user authentication
  return (

    <section className={"section"}>
      <div className={"sidebar-wrapper"}>
        <Sidebar />
      </div>
      <div className={"main-wrapper"}>
        <div className={"nav"}>
        navbar
        </div>
        <hr />
        <div className={"header"}>
        header
        </div>
        <main className={"main"}>{children}</main>
        <div className={"footer"}>
        footer
        </div>
      </div>

    </section>

  );
}
