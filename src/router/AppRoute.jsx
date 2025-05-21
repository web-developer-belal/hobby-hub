import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layouts/Root";
import AllGroups from "../pages/AllGroups";
import GroupDetails from "../pages/GroupDetails";
import CreateGroup from "../pages/CreateGroup";
import MyGroups from "../pages/MyGroups";
import UpdateGroup from "../pages/UpdateGroup";
import ProtectedRoute from "../components/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () =>
          fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/all-groups`),
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/groups",
        loader: () =>
          fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/all-groups`),
        element: <AllGroups />,
      },
      {
        path: "/group/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/group/${params.id}`),
        element: (
          <ProtectedRoute>
            <GroupDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/createGroup",
        element: (
          <ProtectedRoute>
            <CreateGroup />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myGroups",
        element: (
          <ProtectedRoute>
            <MyGroups />
          </ProtectedRoute>
        ),
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/group/${params.id}`),
        element: (
          <ProtectedRoute>
            <UpdateGroup />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
