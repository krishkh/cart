import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import ToggleDarkMode from "./components/toggleDarkMode";
// import ItemSection from "./components/itemSection";
// import data from "./init/initData.json";
function App() {
  return (
    <>
      <Header />
      <ToggleDarkMode />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
