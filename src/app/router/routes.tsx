import { createBrowserRouter } from "react-router-dom";
import { HelloPage } from "../../features/hello";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HelloPage />,
  },
]);
