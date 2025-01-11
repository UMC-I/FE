import { createBrowserRouter } from "react-router";

import { HomePage } from "@pages/home";
import Login from "@pages/login/login";

import { RootLayout } from "@app/layout";
import { HomePage } from "@pages/home";
import { RecordPage } from "@pages/record/ui/RecordPage";
import { MongchivePage } from "@pages/mongchive/ui/MongchivePage";
import { HomePage } from "@pages/home";
import Login from "@pages/login/login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "record",
        element: <RecordPage />,
      },
      {
        path: "my",
        element: <MongchivePage />,
      },
    ],
  },
]);
