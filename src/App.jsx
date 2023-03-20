import Router from "./Routes";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Load from "./components/loader";
const App = () => {
  return (
    <>
      <Load />
      <Header />
      <Navbar />
      <Router />
    </>
  );
};

export default App;
