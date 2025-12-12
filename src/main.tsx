import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./app/providers/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
