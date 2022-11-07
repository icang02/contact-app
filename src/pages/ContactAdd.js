import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactAdd = () => {
  const [name, setName] = useState();
  const [noHp, setNoHp] = useState();
  const [email, setEmail] = useState();

  const [errorName, setErrorName] = useState();
  const [errorNoHp, setErrorNoHp] = useState();

  const navigate = useNavigate();

  const saveContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/contacts", {
        name,
        email,
        noHp,
      });
      navigate("/contacts");
    } catch (error) {
      errorName = setErrorName(error.response.data[0].message);
      errorNoHp = setErrorNoHp(error.response.data[1].message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <Link to={"/contacts"} className="btn btn-primary mb-3">
            Kembali
          </Link>

          <div className="card shadow">
            <div className="card-header fw-bold">Tambah Contact</div>
            <div className="card-body">
              <form onSubmit={saveContact}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Example"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errorName && (
                    <div className="invalid-feedback">{errorName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="noHp" className="form-label">
                    Telepon
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="email"
                    placeholder="0852xxxxxxxx"
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)}
                  />
                  {errorNoHp && (
                    <div className="invalid-feedback">{errorNoHp}</div>
                  )}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdd;
