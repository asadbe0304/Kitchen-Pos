import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import App from "./App";
import { OrderProvider } from "./context/context";
import { AuthRegister } from "./context/Auth";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthRegister>
      <OrderProvider>
        <ToastContainer theme="light" />
        <App />
      </OrderProvider>
    </AuthRegister>
  </BrowserRouter>
);
