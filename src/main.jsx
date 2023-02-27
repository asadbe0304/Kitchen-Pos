import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { OrderProvider } from "./context/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OrderProvider>
      <App />
    </OrderProvider>
  </BrowserRouter>
);
