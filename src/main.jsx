import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LearningProvider } from "./context/LearningContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LearningProvider>
      <App />
    </LearningProvider>
    ,
  </ThemeProvider>,
);
