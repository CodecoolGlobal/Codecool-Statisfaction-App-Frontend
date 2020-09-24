import React from "react";
import { logout } from "../Api/AuthCalls";

export default function HomePage() {
  return (
    <div>
      <div>welcome!</div>
      <button
        onClick={() => {
          logout();
        }}
      >
        logout
      </button>
    </div>
  );
}
