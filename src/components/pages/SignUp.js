import React, { useState } from 'react';
import Footer from '../Footer'
import DoctorSignup from '../DoctorSignUp';
import FormSuccess from '../FormSuccess';
import '../../Styles/SignUp.css';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
            <img className='form-img' src='/images/reg.jpg' alt='Doctor' />
          </div>
          {/* {!isSubmitted ? ( */}
            <DoctorSignup submitForm={submitForm} />
          {/* ) : (
            <FormSuccess />
          )} */}
        </div>
        <Footer/>
      </>
    );
  };
  
  export default Form;
