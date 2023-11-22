import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import validate from './validateinfo';
// import useForm from './useForm';
import '../Styles/SignUp.css';
import PatientService from '../service/PatientService';

const PatientSignup = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    
    user_full_name: '',
    user_address:'',
    user_phone_number:'',
    user_email: '',
    user_password: '',
    user_role:'patient',
    patient_emergency_contact: '',
    patient_health_problem: ''
    
    
      
    })
    
  
  const handleChange = e => {
    const { name, value } = e.target;
    // console.log(name);
    
    setValues({
      ...values,
      [name]: value
    });

  };
      
  const handleSubmit = e => {
    console.log(values);
    e.preventDefault();
    PatientService.addPatient(values);
    alert("Registeration Successful")
    history.push('/login');
  };

  return (
    <div className='form-content-right'>
      <form  className='form' >
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='user_full_name'
            placeholder='Enter your username'
            value={values.user_full_name}
            onChange={handleChange}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Full Address</label>
          <input
            className='form-input'
            type='text'
            name='user_address'
            placeholder='Enter your Address'
            value={values.user_address}
            onChange={handleChange}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='text'
            name='user_phone_number'
            placeholder='Enter your Phone Number'
            value={values.user_phone_number}
            onChange={handleChange}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='user_email'
            placeholder='Enter your email'
            value={values.user_email}
            onChange={handleChange}
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='user_password'
            placeholder='Enter your password'
            value={values.user_password}
            onChange={handleChange}
          />
          
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Emergency Contact Number</label>
          <input
            className='form-input'
            type='text'
            name='patient_emergency_contact'
            placeholder='Enter your Emergency Contact Number '
            value={values.patient_emergency_contact}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Health problems</label>
          <input
            className='form-input'
            type='text'
            name='patient_health_problem'
            placeholder='Enter Health problems (If Any)'
            value={values.patient_health_problem}
            onChange={handleChange}
          />
          
        </div>

        <button className='form-input-btn'  onClick={handleSubmit}>
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default PatientSignup;