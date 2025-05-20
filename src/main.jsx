import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { RouterProvider } from "react-router";
import router from "./router/AppRoute";
import AuthProvider from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
