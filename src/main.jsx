import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./components/aboutUs.jsx";
import ItemSection from "./components/itemSection.jsx";
import ItemPage from "./components/itemPage.jsx";
import data from "./init/initData.json";
import ItemPage1 from "./components/itemPage1.jsx";
console.log(data);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="cart" element={<App />}>
      <Route path="/cart" element={<Navigate to="/cart/items" replace />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="items" element={<ItemSection data={{ data }} />} />
      {/* <Route path="item" element={<ItemPage data={{ data }} />} />   */}
      <Route path="item" element={<ItemPage1 data={{ data }} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
