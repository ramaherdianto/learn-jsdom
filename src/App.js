import logo from "./logo.svg";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Beranda></Beranda>
    </div>
  );
}

export default App;
