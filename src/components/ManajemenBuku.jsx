import React, { useState } from "react";

function ManajemenBuku({ bookList, store }) {
  const [form, setform] = useState("");
  const [inputBook, setInputBook] = useState("");

  // Untuk function onChange
  function handleJudul(Event) {
    setInputBook({ ...inputBook, judul: Event.target.value });
  }
  function handlePengarang(Event) {
    setInputBook({ ...inputBook, pengarang: Event.target.value });
  }
  function handleHarga(Event) {
    setInputBook({ ...inputBook, harga: Event.target.value });
  }
  function handleStock(Event) {
    setInputBook({ ...inputBook, stock: Event.target.value });
  }

  function submitAdd(Event) {
    Event.preventDefault();
    store(inputBook);
  }

  // Menampilkan form create data
  function showCreate() {
    setform("create");
  }

  // Menampilkan form edit data
  function showEdit(book) {
    setInputBook(book);

    setform("edit");
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>

      <button className="btn btn-sm btn-primary my-2" onClick={() => showCreate()}>
        Tambah Buku
      </button>

      {/* {Input From} */}
      {form === "create" && (
        <div id="fromTambah">
          <div id="form" className="card py-2 my-3 bg-light">
            <div className="card-body">
              <h4>Form Tambah Buku</h4>
              <form action="" className="row" onSubmit={submitAdd}>
                <div className="col-3">
                  <input type="text" name="judul" className="form-control mx-2" placeholder="Judul..." onChange={handleJudul} />
                </div>
                <div className="col-3">
                  <input type="text" name="pengarang" placeholder="Pengarang..." className="form-control" onChange={handlePengarang} />
                </div>
                <div className="col-3">
                  <input type="number" name="harga" placeholder="Harga..." className="form-control" onChange={handleHarga} />
                </div>
                <div className="col-3">
                  <input type="number" name="stock" placeholder="Stock..." className="form-control" onChange={handleStock} />
                </div>
                <div className="col-2 mt-3 ml-5">
                  <input type="submit" value="Submit" className="btn btn-success ml-5" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* {ubah data buku} */}
      {form === "edit" && (
        <div id="formUbah">
          <div className="card-body bg-light">
            <h4>Form Ubah Buku</h4>
            <form action="" className="row">
              <div className="col-3">
                <input type="text" name="judul" className="form-control mx-2" placeholder="Judul..." value={inputBook.judul} />
              </div>
              <div className="col-3">
                <input type="text" name="pengarang" placeholder="Pengarang..." className="form-control" value={inputBook.pengarang} />
              </div>
              <div className="col-3">
                <input type="number" name="harga" placeholder="Harga..." className="form-control" value={inputBook.harga} />
              </div>
              <div className="col-3">
                <input type="number" name="stock" placeholder="Stock..." className="form-control" value={inputBook.stock} />
              </div>
              <div className="col-2 mt-3 ml-5">
                <button className="btn-sm btn-warning mx-2">Edit</button>
                <button className="btn-sm btn-danger">Delete</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* {tabel data buku} */}
      <div id="daftarBuku">
        <h4 className="mt-3">Tabel Data Buku</h4>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <td>Harga</td>
              <td>Stock</td>
              <th className="col-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stock}</td>
                <td>
                  <button className="btn-sm btn-warning mx-2" onClick={() => showEdit(book)}>
                    Edit
                  </button>
                  <button className="btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManajemenBuku;
