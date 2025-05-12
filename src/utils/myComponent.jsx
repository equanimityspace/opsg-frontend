import React from "react";
import useAuthState from "../Features/Navigations/AuthContext";

function myComponent() {
  const authState = useAuthState();

  return (
    <div>
      {authState.role === "admin" ? "You are an admin" : "You are a visitor"}
    </div>
  );
}

export default myComponent;