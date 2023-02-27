import React from "react";
import Main from "./components/Main";
import Navbar from "./../src/components/Navbar";
import DashBoard from "./pages/Dashboard/index";
import Settings from "./pages/Settings/index";
import Bills from "./pages/Bills/index";
import Logout from "./pages/Logout/login";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dash" element={<DashBoard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
    </>
  );
};

export default App;
