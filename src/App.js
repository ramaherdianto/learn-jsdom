import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";

function App() {
  const [books, setBooks] = useState([
    { _id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stock: 7 },
    { _id: 2, judul: "Bumi", pengarang: "Tore Liye", harga: 85000, stock: 5 },
  ]);

  function storeData(inputBook) {
    console.log(inputBook);
    alert("data berhasil ditambahkan");
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" exact element={<Beranda></Beranda>}></Route>
          <Route path="/manajemen-buku" exact element={<ManajemenBuku bookList={books} store={storeData}></ManajemenBuku>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
