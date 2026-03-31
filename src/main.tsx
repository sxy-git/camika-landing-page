import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import "./styles/globals.css";
import { useScreenAndFontSizeAdjust } from "./hooks/use-screen-and-font-size";

function AppWrapper() {
  useScreenAndFontSizeAdjust();
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);
