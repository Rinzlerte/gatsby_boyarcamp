import React, {useState} from 'react'
import Input from './ui/Input'
import Button from '../ui/buttons/Button';

import './contactform.scss'

const ContactForm = ({legendTitle, submitTxt}) => {
  const [inputs, setInputs] = useState({ name: '', number: '', email: ''});
  const [loading, setIsloading] = useState(false);

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("ss")

    let dataToSubmit = {};
    let formIsValid = true;

    // for (let key in inputs) {
    //   dataToSubmit[key] = inputs[key].value;
    //   formIsValid = inputs[key].valid && formIsValid;
    // }

    setIsloading(true);
    
    if (formIsValid) {

    }
  }


  return (

    <div className='contact-form--container'>
      <form className='contact-form' onSubmit={handleSubmit} method="POST">
        
        <legend>
            <span>Бронюйте незабутні</span>
            <span>враження для дитини</span>
        </legend>

        <div className='form-row'>
     <Input     
        value={inputs.name} 
        onChange={(event) => setInputs({...inputs, name: event.target.value })} 
     />
        </div>
        <div className='form-row'>

        <Input     
   value={inputs.phone} 
   onChange={(event) => setInputs({...inputs, phone: event.target.value })} 
     />
      
        </div>
        <div className='form-row'>
            <Input     
 value={inputs.email} 
 onChange={(event) => setInputs({...inputs, email: event.target.value })} 
     />
        </div>
        <div className='form-row'>
          <Button type='submit'>{submitTxt || 'submit'}</Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm