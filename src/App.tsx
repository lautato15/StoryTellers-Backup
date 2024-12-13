import React from "react";

import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/Theme-Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stage from "./components/Stage";

const queryClient = new QueryClient();

import Frontpage from "./components/FrontPage";
import { Provider } from "react-redux";
import store from "./redux/storeConfig";

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <div className="min-h-screen flex flex-col p-2 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stories/:title" element={<Frontpage />} />
                <Route path="/stories/:title/:position/:stage" element={<Stage />} />

                <Route path="/muralla" element={<Stage />} />
              </Routes>
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
