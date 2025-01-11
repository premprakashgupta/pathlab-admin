// src/toast/ToastContainer.tsx
"use client"
import React from "react";
import { useToast } from "./ToastContext";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";

const ToastContainer = () => {
  const { toasts } = useToast();
    console.log("toasts",toasts)
  return (
    <div style={{ position: "fixed", top: "20px", right: "10px", zIndex: 9999 }}>
      {toasts.map((toast) => {
        if (toast.type === "success") {
          return <SuccessToast key={toast.id} message={toast.message} />;
        }
        if (toast.type === "error") {
          return <ErrorToast key={toast.id} message={toast.message} />;
        }
        // You can add more toast types like info if needed
        return null;
      })}
    </div>
  );
};

export default ToastContainer;
