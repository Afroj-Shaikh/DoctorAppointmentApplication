import React from 'react';
import validate from './validateinfo';
import useForm from './useForm';
import '../Styles/SignUp.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
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
          {errors.user_full_name && <p>{errors.user_full_name}</p>}
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
          {errors.user_address && <p>{errors.user_address}</p>}
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
          {errors.user_phone_number && <p>{errors.user_phone_number}</p>}
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
          {errors.user_email && <p>{errors.user_email}</p>}
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
          {errors.user_password && <p>{errors.user_password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='user_password2'
            placeholder='Confirm your password'
            value={values.user_password2}
            onChange={handleChange}
          />
          {errors.user_password2 && <p>{errors.user_password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;