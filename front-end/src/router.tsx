import { createBrowserRouter } from "react-router-dom";

import LoginPage from "./pages/login/index";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export { router };
