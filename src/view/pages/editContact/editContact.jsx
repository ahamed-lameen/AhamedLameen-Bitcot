/**
 *
 * editContact.jsx
 * @author - Lameen
 * @date - 16/06/2023
 **/
import TextField from "../../component/textField/textField";
import Button from "../../component/button/button";
import "./style.css";
import Title from "../../component/title/title";
import { useLocation, useNavigate } from "react-router-dom";

function EditContact() {
  // const navigate = useNavigate();
  // const goToContactPage = () => {
  //     navigate("/");
  // }
  // const goToEditContact = (selectedContact) => {
  //     navigate("/editContact", {state: selectedContact});
  // }
  // const { state } = useLocation();
  // console.log(state);
  return (
    <>
      <div className="row-fixed">
        <Title title="Edit Contact" />
        {/* <div>
                    <i class="close-icon fa-solid fa-xmark" ></i>
                </div> */}
      </div>
      <hr className="line" />
      <TextField type="text" size="38" label="Name:" />
      <TextField type="email" size="38" label="Email:" />
      <TextField type="text" size="38" label="PhoneNumber:" />
      <TextField type="text" size="38" label="Address:" />
      <div className="row-fixed">
        <div className="ml-10">
          <Button label="Update" isPrimary={true} />
        </div>
        <div className="ml-10">
          <Button label="Reset" />
        </div>
      </div>
    </>
  );
}

export default EditContact;
