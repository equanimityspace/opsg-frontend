import React from "react";
import { useAuthState } from "../Features/Navigations/AuthContext";

export default function myComponent() {
  const authState = useAuthState();

  return (
    <div>
      {authState.role === "admin" ? "You are an admin" : "You are a visitor"}
    </div>
  );
}