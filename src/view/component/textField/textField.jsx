/**
* 
* textField.jsx
* @author - Lameen
* @date - 16/06/2023
**/
import './style.css'

function TextField(props) {
    return ( 
        <div className='field-set'>
            <input type={props.type} size={props.size} className='text-field' placeholder={props.placeholder} 
            onChange={props.handleChange} value={props.initialValue} />
            <p className='field-error'>{props.error}</p> 
        </div>
    );
}

export default TextField;