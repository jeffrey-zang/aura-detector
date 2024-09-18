import React from "react";
// import { Routes, Route } from "react-router-dom";
import Analyze from "./pages/Analyze/Analyze.jsx";
import { EmotionProvider } from "./contexts/EmotionContext.jsx";
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <EmotionProvider>
      <Analyze />
      <Analytics />
    </EmotionProvider>
  );
}

export default App;
