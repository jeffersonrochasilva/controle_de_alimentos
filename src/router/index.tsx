import { createBrowserRouter } from "react-router-dom";
// pages
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Home/pages/Cadastro";
import Estoque from "../pages/Home/pages/Estoque";
import Cards from "../pages/Home/pages/Cards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Cards />,
          },
          {
            path: "cadastro",
            element: <Cadastro />,
          },
          {
            path: "estoque",
            element: <Estoque />,
          },
        ],
      },
    ],
  },
]);

export default router;
