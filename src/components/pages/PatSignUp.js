import React, { useState } from 'react';
import Footer from '../Footer'
import PatientSignup from '../PatientSignUp';
import FormSuccess from '../FormSuccess';
import '../../Styles/SignUp.css';
import Navbar from '../Navbar';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
      <Navbar/>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
            <img className='form-img' src='/images/reg.jpg' alt='Patient' />
          </div>
          {!isSubmitted ? (
            <PatientSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
        <Footer/>
      </>
    );
  };
  
  export default Form;
