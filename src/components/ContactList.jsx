import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const response = await axios.get("http://127.0.0.1:5000/contacts");
    setContacts(response.data);
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/contacts/${id}`);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {contacts.length === 0 ? (
        <h4 className="text-muted text-center">Belum data kontak</h4>
      ) : (
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Telepon</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{contact.name}</td>
                    <td>{contact.noHp}</td>
                    <td>
                      <Link
                        to={`/contacts/${contact.id}`}
                        className="btn btn-success badge me-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-danger badge"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
