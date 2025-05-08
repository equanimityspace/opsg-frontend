import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./utils/ProtectedRoute";
import Admin from "./components/Admin";

// protected routes are created as children under the root route
export default router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    element: <ProtectedRoute role="user"/>,
                    children: [
                        {
                            path: "/profile",
                            element: <Profile />
                        },
                        //paths to other protected routes
                        // {
                        //     path: "/profile",
                        //     element: <Profile />
                        // }
                    ]
                },
                {
                    element: <ProtectedRoute role="admin"/>,
                    children: [
                        {
                            path: "/admin",
                            element: <Admin/>
                        }
                    ]
                }
            ]
        }
    ]
)