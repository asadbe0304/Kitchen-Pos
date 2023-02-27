import React from "react";
import Main from "./components/Main";
import Navbar from "./../src/components/Navbar";
import DashBoard from "./pages/Dashboard/index"
import Settings from "./pages/Settings/index"
import Bills from "./pages/Bills/index"
import Logout from "./pages/Logout/login"
const App = () => {
  return (
    <>
      <Navbar />
      <Main />

    </>
  );
};

export default App;
