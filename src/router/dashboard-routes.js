import { DashboardLayout } from "../components/DashboardLayout";
import { Category } from "../views/Category";
import { Dashboard } from "../views/Dashboard";

const DashboardRoutes = [
  {
    path: "/categories",
    name: "Dashboard",
    exact: true,
    element: <Dashboard />,
    meta: {
      layout: DashboardLayout,
    },
  },
  {
    path: "/categories/:categoryId",
    name: "Dashboard",
    exact: true,
    element: <Category />,
    meta: {
      layout: DashboardLayout,
    },
  },
];

export default DashboardRoutes;
