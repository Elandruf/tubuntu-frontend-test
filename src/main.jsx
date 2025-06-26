import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserCard from "./components/userCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <UserCard/>
  </StrictMode>
);
