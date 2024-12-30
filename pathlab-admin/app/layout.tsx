"use client"
// layout.tsx (RootLayout)
import { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/globals.css";
import { ToastProvider } from "./toast";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <ToastProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
      </ToastProvider>
    </StoreProvider>
  );
}
