import { Navigate, RouteObject } from "react-router-dom";

//components
import Layout from "../components/Layout/Layout";

//pages
import DashboardPage from "../pages/DashboardPage";
import SubscriberPage from "../pages/SubscriberPage";
import UserDetailPage from "../pages/UserDetailPage";

const AppRoute: RouteObject = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/subscriber-list",
      element: <SubscriberPage />,
    },

    {
      path: "/user/:user_id",
      element: <UserDetailPage />,
    },
  ],
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`dashboard`}></Navigate>,
  },
  AppRoute,
];

export default routes;
