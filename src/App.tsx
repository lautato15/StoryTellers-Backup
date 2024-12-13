import React from "react";

import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/Theme-Provider";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Story from "./components/Story";

import Frontpage from "./components/FrontPage";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <div className="min-h-screen flex flex-col p-2 pt-20">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headmurallas" element={<Frontpage />} />
            <Route path="/murallas" element={<Story />} />
          </Routes>

        </div>

      </ThemeProvider>
    </>
  );
}

export default App;
