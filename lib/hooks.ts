"use client"
// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";
import { useEffect } from "react";
import { fetchUser } from "./features/auth/authSlice";
import { useRouter } from "next/navigation";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!user && status === "idle") {
      dispatch(fetchUser());
    }
  }, [dispatch, user, status]);

  return { user, status };
};

export const useAuthRedirect = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();
  
    useEffect(() => {
      if (user === null) {
        router.replace("/super/login");
      }
    }, [user, router]);
  };

