import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/home.jsx";
import About from "./components/aboutUs.jsx";
import ItemPage from "./components/itemPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="items" element={<ItemPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
