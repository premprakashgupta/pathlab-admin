"use client"
// src/toast/ToastContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define toast types
export type ToastType = "success" | "error" | "info";

// Define the context and the toast data structure
interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
  toasts: { id: number; message: string; type: ToastType }[];
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: ToastType }[]
  >([]);

  const showToast = (message: string, type: ToastType) => {
    console.log(message)
    const id = Date.now();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, type }
    ]);
    console.log({ id, message, type })
    console.log(toasts)
    // Automatically remove the toast after 5 seconds
    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== id)
      );
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};
