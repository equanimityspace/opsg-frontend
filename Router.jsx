import { createBrowserRouter, Router } from "react-router-dom";
import Home from "./Home";
import Profile from "./Layout/Pages/Profile";
import ProtectedRoutes from "./utils/ProtectedRoutes";

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
        element: <ProtectedRoutes isAdmin="true" />,
        children: [
          {
            path: "/adminUser",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

export default Router;
