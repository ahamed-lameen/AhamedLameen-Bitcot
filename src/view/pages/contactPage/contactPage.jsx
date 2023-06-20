/**
 *
 * header.jsx
 * @author - Lameen
 * @date - 16/06/2023
 **/
import TextField from "../../component/textField/textField";
import Title from "../../component/title/title";
import AddContact from "../addContact/addContact";
import ContactDetails from "../contactDetail/contactdetail";
import data from "./data.json";
import "./style.css";
import { useState } from "react";

function ContactPage(props) {
  const [contact, setContact] = useState([...data]);
  const [searchContacts, setSearchContacts] = useState("");
  const [editContacts, setEditContacts] = useState("");
  const [viewContacts, setViewContacts] = useState("");

  const filterContact = contact.filter((value) => {
    return value.name.includes(searchContacts);
  });

  const editContact = (value) => {
    const edit = contact.filter((contacts) => {
      return value.id === contacts.id;
    });
    console.log("edit", edit);
    setEditContacts(edit);
  };

  const viewContact = (id) => {
    console.log(id);
    const view = contact.filter((contacts) => {
      return id === contacts.id;
    });
    console.log(view);
    setViewContacts(view);
  };

  const deleteContact = (id) => {
    const newContact = contact.filter((contacts) => {
      return id !== contacts.id;
    });
    setContact(newContact);
  };
  return (
    <>
      <div className="row">
        <div className="cell-1 container">
          <Title title="All Contacts" />
          <hr className="line" />
          <TextField
            placeholder="Search Contact"
            type="text"
            size="38"
            initialValue={searchContacts}
            handleChange={(event) => setSearchContacts(event.target.value)}
          />
          <div className="box">
            {filterContact.map((value, index) => (
              <div className="row layout-container">
                <div className="cell-w75 serialNumber-box">
                  <div className="label-id">{value.id}</div>
                </div>
                <div className="cell-w75">
                  <i class="file-icon fa-solid fa-user"></i>
                </div>
                <div className="cell-w225">
                  <div>{value.name}</div>
                  <div className="customer-detail">{value.mobile}</div>
                </div>
                <div className="cell-w203">
                  <div className="editing-icon">
                    <i
                      class="view-icon fa-solid fa-eye"
                      onClick={() => viewContact(value.id)}
                    ></i>
                    <i
                      class="edit-icon fa-solid fa-pen"
                      onClick={() => editContact(value)}
                    ></i>
                    <i
                      class="delete-icon fa-solid fa-trash"
                      onClick={() => deleteContact(value.id)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cell-w380">
          {viewContacts ? (
            <ContactDetails
              viewContacts={viewContacts}
              setViewContacts={setViewContacts}
            />
          ) : (
            <AddContact
              setContact={setContact}
              editContacts={editContacts}
              contact={contact}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ContactPage;