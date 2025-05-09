import { createBrowserRouter, Router } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import Profile from "./Layout/Pages/Profile";
import Root from "./components/Root";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Admin from "./components/Admin";

// protected routes are created as children under the root route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        element: <ProtectedRoutes role="user" />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          //paths to other protected routes
          // {
          //     path: "/profile",
          //     element: <Profile />
          // }
        ],
      },
      {
        element: <ProtectedRoutes role="admin" />,
        children: [
          {
            path: "/admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);
export default Router;
