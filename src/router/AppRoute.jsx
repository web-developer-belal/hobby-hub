import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layouts/Root";
import AllGroups from "../pages/AllGroups";
import GroupDetails from "../pages/GroupDetails";
import CreateGroup from "../pages/user/CreateGroup";
import MyGroups from "../pages/user/MyGroups";
import UpdateGroup from "../pages/user/UpdateGroup";
import ProtectedRoute from "../components/ProtectedRoute";
import About from "../pages/About";
import Contact from "../pages/Contact";
import EventsPage from "../pages/EventsPage";
import ResourcesPage from "../pages/ResourcesPage";
import UserLayout from "../layouts/UserLayout";
import Dashboard from "../pages/user/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: (
      <Root>
        <ErrorPage></ErrorPage>
      </Root>
    ),
    children: [
      {
        index: true,
        loader: () =>
          fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/all-groups`),
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resources-tutorial",
        element: <ResourcesPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
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
        path: "/dashboard",
        Component: UserLayout,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ),
          },
          {
            path: "createGroup",
            element: (
              <ProtectedRoute>
                <CreateGroup />
              </ProtectedRoute>
            ),
          },
          {
            path: "myGroups",
            element: (
              <ProtectedRoute>
                <MyGroups />
              </ProtectedRoute>
            ),
          },
          {
            path: "updateGroup/:id",
            loader: ({ params }) =>
              fetch(
                `${import.meta.env.VITE_APP_BACKEND_URL}/group/${params.id}`
              ),
            element: (
              <ProtectedRoute>
                <UpdateGroup />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
