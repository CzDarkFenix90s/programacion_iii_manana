import type { RouteObject } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import PublicHome from "../pages/public/PublicHome";
import PublicPostDetail from "../pages/public/PublicPostDetail";
import Login from "../pages/public/PublicHome";
import Register from "../pages/public/PublicHome";

export const publicRoutes: RouteObject = {
  path: "/",
  element: <PublicLayout />,
  children: [
    { index: true, element: <PublicHome /> },
    { path: "posts/:id", element: <PublicPostDetail /> },
    { path: "auth/login", element: <Login /> },
    { path: "auth/register", element: <Register /> },
  ],
};