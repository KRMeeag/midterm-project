import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { SpaceDetailsProvider } from "./contexts/SpaceDetailsContext";
import { UserProvider } from "./contexts/UserContext";
import { ModalProvider } from "./contexts/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpaceDetailsProvider>
      <UserProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </UserProvider>
    </SpaceDetailsProvider>
  </React.StrictMode>
);
