import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    user_full_name: '',
    user_address:'',
    user_phone_number:'',
    user_email: '',
    user_password: '',
    user_password2: '',
    doctor_license_number: '',
    doctor_clinic_address: '',
    doctor_category:''
  });


  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const submitInfo =(doctor)=>{
    console.log("ahe sgl barobar");
  }
  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    submitInfo(values);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;