import { createBrowserRouter } from "react-router";
import Login from "@pages/login/Login";
import { HomePage } from "@pages/home";
import { RecordPage } from "@pages/record/ui/RecordPage";
import { MongchivePage } from "@pages/mongchive/ui/MongchivePage";
import AuthLayout from "@app/layout/AuthLayout";
import MainLayout from "@app/layout/MainLayout";
import SuccessPage from "@pages/success/SuccessPage";
import Rank from "@pages/Rank/Rank";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "record",
        element: <RecordPage />,
      },
      {
        path: "rank",
        element: <Rank />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },

      {
        path: "my",
        element: <MongchivePage />,
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
    ],
  },
]);
