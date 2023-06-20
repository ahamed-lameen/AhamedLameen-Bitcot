/**
* 
* contactDetails.jsx
* @author - Lameen
* @date - 16/06/2023
**/
import Button from '../../component/button/button';
import Title from '../../component/title/title';
import './style.css'

function ContactDetails(props) {
    const viewContact = props.viewContacts;
    const viewContacts = props.setViewContacts;

    const closeviewContact = () => {
        viewContacts("");
    }

    return ( 
        <>
            <Title title='View Contact' />
            <hr className='line'/>
            <div className='button-container'>
                <Button handleClick={() => closeviewContact()} label='Close' isPrimary={false}/>
            </div>
            <div className='layout-box'>
             {viewContact.map((value) => (
                  <div className='layout-container'>
                    <p className='contact-label'>Name: {value.name}</p>
                    <p className='contact-label'>Email: {value.email}</p>
                    <p className='contact-label'>Mobile: {value.mobile}</p>
                    <p className='contact-label'>Address: {value.address}</p>
                </div>
            ))}
            </div>
        </>
    );
}

export default ContactDetails;