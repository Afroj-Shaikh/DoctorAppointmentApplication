export default function validateInfo(values) {
    let errors = {};
  
    if (!values.user_full_name.trim()) {
      errors.user_full_name = 'Full Name required';
    }
  
    if (!values.user_address.trim()) {
      errors.user_address = 'Full Address required';
    }
    
    if (!values.user_phone_number.trim()) {
      errors.user_phone_number = 'Phone Number required';
    }else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.user_phone_number)) {
      errors.user_phone_number = 'Phone Number is invalid';
    }
  
    if (!values.user_email) {
      errors.user_email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
      errors.user_email = 'Email address is invalid';
    }
    if (!values.user_password) {
      errors.user_password = 'Password is required';
    } else if (values.user_password.length < 6) {
      errors.user_password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.user_password2) {
      errors.user_password2 = 'Password is required';
    } else if (values.user_password !== values.user_password2) {
      errors.user_password2 = 'Passwords do not match';
    }
  
    if (!values.doctor_license_number.trim()) {
      errors.doctor_license_number = 'License Number required';
    }
  
    if (!values.doctor_clinic_address.trim()) {
      errors.doctor_clinic_address = 'Clinic Address required';
    }
  
    if (!values.doctor_category.trim()) {
      errors.doctor_category = 'Specialization required';
    }
  
    return errors;
  }