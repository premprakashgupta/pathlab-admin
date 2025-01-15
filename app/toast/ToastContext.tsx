"use client"
// src/toast/ToastContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define toast types
export type ToastType = "success" | "error" | "info";

// Define the context and the toast data structure
interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
  toasts: { id: string; message: string; type: ToastType }[]; // Change id type to string
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Custom function to generate a unique ID
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Random string of length 9
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<
    { id: string; message: string; type: ToastType }[] // Adjust type to string for id
  >([]);

  const showToast = (message: string, type: ToastType) => {
    const id = generateUniqueId(); // Use the custom ID generator
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, type }
    ]);

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
