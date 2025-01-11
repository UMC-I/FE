import { createBrowserRouter } from "react-router";
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
    ],
  },
]);
