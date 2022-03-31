import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">
          <ul className="nav">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
            <li>
              <Link className="nav-link" to="/">
                Beranda
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/manajemen-buku">
                Manajemen Buku
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
