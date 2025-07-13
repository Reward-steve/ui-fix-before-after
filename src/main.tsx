import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import After from "./pages/After";
import Before from "./pages/Before";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/before" element={<Before />} />
        <Route path="/after" element={<After />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
