import { createBrowserRouter } from "react-router";
import Login from "@pages/login/Login";
import { HomePage } from "@pages/home";
import { RecordPage } from "@pages/record/ui/RecordPage";
import { MongchivePage } from "@pages/mongchive/ui/MongchivePage";
import AuthLayout from "@app/layout/AuthLayout";
import MainLayout from "@app/layout/MainLayout";
import SuccessPage from "@pages/success/SuccessPage";
import { MyDreamListPage } from "@pages/mydreamlist/ui/MyDreamListPage";
import InterpretationPage from "@pages/interpretation/ui/InterpretationPage";

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
        path: "interpret",
        element: <InterpretationPage />,
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
      {
        path: "mydreams",
        element: <MyDreamListPage />,
      },
    ],
  },
]);
