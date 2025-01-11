import { createBrowserRouter } from "react-router";

import { RootLayout } from "@app/layout";
import { HomePage } from "@pages/home";
import { RecordPage } from "@pages/record/ui/RecordPage";
import { MongchivePage } from "@pages/mongchive/ui/MongchivePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
