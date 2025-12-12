import { createBrowserRouter } from "react-router-dom";
import FeedPage from "../../ui/pages/FeedPage";
import ProfilePage from "../../ui/pages/ProfilePage";
import HelloWorld from "../../ui/pages/HelloWorld";

export const router = createBrowserRouter([
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
