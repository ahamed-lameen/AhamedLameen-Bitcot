/**
 *
 * addContact.jsx
 * @author - Lameen
 * @date - 16/06/2023
 **/
import TextField from "../../component/textField/textField";
import Button from "../../component/button/button";
import "./style.css";
import Title from "../../component/title/title";
import { useEffect, useState } from "react";
let id = 3;

function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [addressError, setAddressError] = useState("");
  const contact = props.contact;
  const editContacts = props.editContacts;
  // console.log(contact);
  const setContact = props.setContact;
  var nameLength = name.trim().length;
  var emailLength = email.trim().length;
  var mobileLength = mobile.trim().length;
  var addressLength = address.trim().length;

  useEffect(() => {
    if (editContacts.length > 0) {
      setName(editContacts[0].name);
      setEmail(editContacts[0].email);
      setMobile(editContacts[0].mobile);
      setAddress(editContacts[0].address);
    }
  }, [editContacts]);

  const addContact = () => {
    if (nameLength === 0) {
      setNameError("Please enter name");
    }
    else {
      setNameError("");
    } 
     if (emailLength === 0) {
      setEmailError("Please enter email");
    }
    else {
      setEmailError("");
    }
    if (mobileLength === 0) {
      setMobileError("Please enter phone number");
    }
    else {
      setMobileError("");
    }
    if(addressLength === 0) {
      setAddressError("Please enter address");
    } 
    else {
      setAddressError("");
    }
    if( nameLength !== 0 && emailLength !== 0 && mobileLength !== 0 && addressLength !== 0) {
      setContact([...contact, { id: id++, name, email, mobile, address }]);
      setName("");
      setEmail("");
      setMobile("");
      setAddress("");
    }
  };

  const reset = () => {
    setContact([]);
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
  }
  return (
    <>
      <div className="row-fixed">
        {editContacts == 0 ? <Title title="Add Contact" /> : <Title title="Edit Contact" /> }
      </div>
      <hr className="line" />
      <div className="label">Name:</div>
      <TextField
        placeholder="Enter Your Name"
        type="text"
        size="38"
        initialValue={name}
        handleChange={(event) => setName(event.target.value)}
        error={nameError}
      />
      <div className="label">Email:</div>
      <TextField
        placeholder="Enter Your Email"
        type="email"
        size="38"
        initialValue={email}
        handleChange={(event) => setEmail(event.target.value)}
        error={emailError}
      />
      <div className="label">Mobile:</div>
      <TextField
        placeholder="Enter Your Phone Number"
        type="text"
        size="38"
        initialValue={mobile}
        handleChange={(event) => setMobile(event.target.value)}
        error={mobileError}
      />
      <div className="label">Address:</div>
      <TextField
        placeholder="Enter Your Address"
        type="text"
        size="38"
        initialValue={address}
        handleChange={(event) => setAddress(event.target.value)}
        error={addressError}
      />
      <div className="row">
        <div className="ml-30">
        {editContacts == 0 ?  <Button label="Submit" isPrimary={true} handleClick={() => addContact()} /> : <Button label="Update" isPrimary={true} /> }
        </div>
        <div className="ml-30">
         <Button label="Reset" handleClick={() => reset()} />  
        </div>
      </div>
    </>
  );
}
export default AddContact;
