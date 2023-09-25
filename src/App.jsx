import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Principal } from "./pages/Principal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/principal",
    element: <Principal />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
