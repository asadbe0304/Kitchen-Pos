import Router from "./Routes";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {

  return (
    <>
      <Header/>
      <Navbar />
      <Router />
    </>
  );
};

export default App;
