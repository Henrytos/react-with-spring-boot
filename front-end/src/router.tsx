import { createBrowserRouter } from "react-router-dom";

import { MainSectionTemplate } from "./templates/main-section";
import LoginPage from "./pages/login";
import { HomePage } from "./pages/home";

const router = createBrowserRouter([
  {
    element: <MainSectionTemplate />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export { router };
