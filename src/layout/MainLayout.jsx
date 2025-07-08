import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContextProvider } from "../context/ThemeContext";

export default function MainLayout() {
  return (
    <ThemeContextProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 mt-3 pt-5">
          {" "}
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}
