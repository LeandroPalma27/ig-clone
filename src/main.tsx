import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./app/providers/AppProvider.tsx";
import { AppRouter } from "./app/router/AppRouter.tsx";
import './style.css'

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>
);
