import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:slug", element: <GamePage /> },
    ],
  },
]);

export default routes;
