"use client";
// layout.tsx (RootLayout)
import { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/globals.css";
import { ToastProvider } from "./toast";
import { ThemeProvider } from "./themeProvider";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ToastProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
