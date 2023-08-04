import Router from "./Routes";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleZoom = (event) => {
      if (event.ctrlKey || event.metaKey) {
        // Disable zoom on Ctrl/cmd + mouse wheel
        event.preventDefault();
      }
    };

    const disableZoom = () => {
      // Disable zoom on the entire window
      document.addEventListener("wheel", handleZoom, { passive: false });
      document.addEventListener("keydown", handleZoom, { passive: false });
    };

    disableZoom(); // Apply the zoom disable when the component mounts

    return () => {
      // Clean up the zoom disable when the component unmounts
      document.removeEventListener("wheel", handleZoom);
      document.removeEventListener("keydown", handleZoom);
    };
  }, []);
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Router />
    </>
  );
};

export default App;
