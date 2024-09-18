import React from "react";
import { Routes, Route } from "react-router-dom";
import Analyze from "./pages/Analyze/Analyze.jsx";
import { EmotionProvider } from "./contexts/EmotionContext.jsx";

function App() {

  return (
    <EmotionProvider>
      <Analyze />
    </EmotionProvider>
  );
}

export default App;
