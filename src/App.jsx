import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Navbar from "./../src/components/Navbar";
import DashBoard from "./pages/Dashboard/index";
import Settings from "./pages/Settings/index";
import Bills from "./pages/Bills/index";
import Logout from "./pages/Logout/login";
import Sign from "./pages/Sign/log";
import { Route, Routes } from "react-router-dom";
import Track from "./pages/Attendance";
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dash" element={<DashBoard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/track" element={<Track />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
