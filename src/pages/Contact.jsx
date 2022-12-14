import React from "react";
import { Link } from "react-router-dom";
import ContactList from "../components/ContactList";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <Link to={"/contacts/add"} className="btn btn-primary mb-3">
              Tambah Contact
            </Link>

            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
