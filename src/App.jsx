import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Analyze from "./pages/Analyze/Analyze.jsx";
// import { EmotionProvider } from "./contexts/EmotionContext.jsx";
import { Analytics } from "@vercel/analytics/react"
import fd from "@mediapipe/face_detection";

function App() {
  console.log('CHUINGI', fd)

  return (
    <div>
      {/* <Analyze /> */}
      <Analytics />asdfsd
    </div>
  );
}

export default App;
