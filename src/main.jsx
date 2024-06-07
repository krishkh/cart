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
import AboutUs from "./components/aboutUs.jsx";
import ItemSection from "./components/itemSection.jsx";
import data from "./init/initData.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="cart" element={<App />}>
      <Route path="" element={<AboutUs />} />
      <Route path="items" element={<ItemSection data={{ data }} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
