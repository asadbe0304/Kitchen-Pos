import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import App from "./App";
import { OrderProvider } from "./context/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <WavyContainer/>
      <OrderProvider>
        <App />
      </OrderProvider>
    </BrowserRouter>
);
