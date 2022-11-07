import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const ContactEdit = () => {
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    findContact();
  }, []);

  const updateContact = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:5000/contacts/${id}`, {
        name,
        email,
        noHp,
      });
      navigate("/contacts");
    } catch (error) {
      console.log(error);
    }
  };

  const findContact = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/contacts/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setNoHp(response.data.noHp);
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
              <form onSubmit={updateContact}>
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

export default ContactEdit;
