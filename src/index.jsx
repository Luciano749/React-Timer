import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Reset from "./styles/Reset";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Countdown from "./components/Countdown";
import { IsNightProvider } from "./context/IsNightcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reset />
    <IsNightProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </Router>
    </IsNightProvider>
  </React.StrictMode>
);
