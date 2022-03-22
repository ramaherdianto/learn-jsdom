import React from "react";
import TabelBuku from "./TabelBuku";

function ManajemenBuku() {
  // PART DATA

  // PART EVENT HANDLING

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>

      <button className="btn btn-sm btn-primary my-2">Tambah Buku</button>

      {/* {Input From} */}
      <div id="form" className="card py-2 my-3 bg-secondary">
        <div className="card-body">
          <h4>Form Buku</h4>
          <form action="" className="row">
            <div className="col-6">
              <input type="text" name="judul" className="form-control mx-2" placeholder="Judul..." />
            </div>
            <div className="col-4">
              <input type="text" name="pengarang" placeholder="Pengarang..." className="form-control" />
            </div>
            <div className="col-2">
              <input type="submit" value="Submit" className="btn btn-success" />
            </div>
          </form>
        </div>
      </div>

      {/* {tabel data buku} */}
      <TabelBuku></TabelBuku>
    </div>
  );
}

export default ManajemenBuku;
