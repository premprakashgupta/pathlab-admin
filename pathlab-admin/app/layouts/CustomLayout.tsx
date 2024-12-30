"use client";
import type { ReactNode } from "react";
import "./custom-layout.css";
import { useAuth } from "@/lib/hooks";
import Sidebar from "../super/components/Sidebar";
import { useTheme } from "../themeProvider";

interface Props {
  readonly children: ReactNode;
}

export default function CustomLayout({ children }: Props) {
  useAuth(); // Initialize user authentication
  const { theme, toggleTheme } = useTheme(); // No need to pass types, already defined in the context

  return (
    <section className="section">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="main-wrapper">
        <div className="nav">
          Navbar
        </div>
        <hr />
        <div className="header">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-light-primary-500 dark:bg-dark-primary-200 text-white rounded"
          >
            Toggle to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
        <main className="main">{children}</main>
        <div className="footer">
          Footer
        </div>
      </div>
    </section>
  );
}
