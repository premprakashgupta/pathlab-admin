// app/page.tsx
import { redirect } from "next/navigation";

export default function IndexPage() {
  // Redirect to /admin/login when the user accesses the root route
  redirect("/admin/login");

  // Render a fallback or empty component, since redirect happens immediately
  return null; 
}
