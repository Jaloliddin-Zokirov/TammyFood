import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
