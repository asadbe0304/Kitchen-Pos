import Main from "./../components/Main";
import Header from "./../components/Header";
import Navbar from "./../../src/components/Navbar";
import DashBoard from "./../pages/Dashboard";
import Settings from "./../pages/Settings/";
import Bills from "./../pages/Bills/index";
import Logout from "./../pages/Logout/login";
import Sign from "./../pages/Sign/log";
import { Route, Routes } from "react-router-dom";
import Track from "./../pages/Attendance";
import Profile from "./../pages/Profile";
import Cart from "./../pages/Cart";
import Layout from "../layout/Layout";
// import TimeTracker from "../pages/Scaner/TimeTRack";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Main />} />
        <Route path="/dash" element={<DashBoard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/track" element={<Track />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/time" element={<TimeTracker />} /> */}
      </Routes>
    </>
  );
};

export default index;
