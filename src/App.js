import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" exact element={<Beranda></Beranda>}></Route>
          <Route path="/manajemen-buku" exact element={<ManajemenBuku></ManajemenBuku>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
