import FeedPage from "../../ui/pages/FeedPage";
import ProfilePage from "../../ui/pages/ProfilePage";
import HelloWorld from "../../ui/pages/HelloWorld";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <FeedPage />,
  },
  {
    path: "/profile/:id",
    element: <ProfilePage />,
  },
  {
    path: "/hw",
    element: <HelloWorld />,
  },
]);
