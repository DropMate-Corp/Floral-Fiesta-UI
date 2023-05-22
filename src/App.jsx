import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Purchase from "./pages/Purchase";

import { CartProvider } from "./components/Cart/CartContext";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  }
]);

function App() {

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
