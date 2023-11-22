import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import validate from './validateinfo';
// import useForm from './useForm';
import '../Styles/SignUp.css';
import DoctorService from '../service/DoctorService';

const DoctorSignup = () => {
  const history = useHistory();
  const [values, setValues] = useState({

    user_full_name: '',
    user_address: '',
    user_phone_number: '',
    user_email: '',
    user_password: '',
    user_role: 'doctor',
    doctor_license_number: '',
    doctor_clinic_address: '',
    doctor_category: ''

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
    DoctorService.addDoctor(values).then((response) => {
      console.log("Doctor From Server " + response.data);
      alert("Registeration Successful")
    history.push('/login');

    })
  };

  return (
    


    <div className='form-content-right'>
      <h1 id='tag'></h1>
      <form className='form' >
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
          <label className='form-label'>Doctor's License Number</label>
          <input
            className='form-input'
            type='text'
            name='doctor_license_number'
            placeholder='Enter your Doctors License Number '
            value={values.doctor_license_number}
            onChange={handleChange}
          />

        </div>

        <div className='form-inputs'>
          <label className='form-label'>Clinic Address</label>
          <input
            className='form-input'
            type='text'
            name='doctor_clinic_address'
            placeholder='Enter your Clinic Address'
            value={values.doctor_clinic_address}
            onChange={handleChange}
          />

        </div>
        <div className='form-inputs'>
          <label className='form-label'>Doctor's Specialization</label>
          <select
            className='form-input'
            name='doctor_category'
            placeholder='Select your Specialization'
            value={values.doctor_category}
            onChange={handleChange}
          >
            <option value="general">General Physician</option>
            <option value="physiotherapist">Physiotherapist</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dentist">Dentist</option>
            <option value="radiologist">Radiologist</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="psychiatrist">Psychiatrist</option>
            <option value="gynecologist">Gynecologist</option>
            <option value="pediatrician">Pediatrician</option>
            <option value="neurologist">Neurologist</option>
            <option value="nephrologist">Nephrologist</option>
            <option value="endocrinologist">Endocrinologist</option>


          </select>

        </div>

        <button className='form-input-btn' onClick={handleSubmit}>
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default DoctorSignup;