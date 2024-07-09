import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home-page";
import Cart from "./pages/cart";

// layout
import RootLayout from "./layout/RootLayout";
import CheckOut from "./pages/CheckOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
      <Route path="/checkout" element={<CheckOut />} />
        <Route path="cart" element={<Cart />}/>
        <Route path="/home" element={<Home />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
