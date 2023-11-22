
import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../Styles/App.css';
import Footer from '../Footer';
import { Button } from '../Button';

import LoginNavbar from '../LoginNavbar'
import '../../Styles/Category.css';
import '../../Styles/PatInfo.css';

function DocProfile() {
  const [user, setUser] = useState({
    doctor: {}

  })

  useEffect(async () => {
    const data = await axios
      .get("http://localhost:8080/doctor/" + JSON.parse(window.sessionStorage.getItem("ruser-profile")).user_id)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    setUser({ doctor: data.data });
  }, []);

  const handleLogout=()=>{
    window.sessionStorage.clear();
}

  return (
        <>
        <LoginNavbar/>

        <div className='form-container-patinfo'>

          <div className='form-content-center'>
      <form className='form'  >
          <div>
       
            <h1><label className='key-label'>Doctor Information   </label></h1>
        
             <label className='key-label'>Full Name : </label>
              <label className='value-label'>{user.doctor.user_full_name}</label><br />
          
           
                <label className='key-label'>Address : </label>
              <label className='value-label'>{user.doctor.user_address}</label><br />
            
                <label className='key-label'>Phone Number : </label>
              <label className='value-label'>{user.doctor.user_phone_number}</label><br />
             
                <label className='key-label'>Email : </label>
              <label className='value-label'>{user.doctor.user_email}</label><br />
            
                <label className='key-label'>Specialization : </label>
              <label className='value-label'>{user.doctor.doctor_category}</label><br />
             
                <label className='key-label'>Lisence Number : </label>
              <label className='value-label'>{user.doctor.doctor_license_number}</label><br />
             
           
           
                <label className='key-label'>Clinic  : </label>
              <label className='value-label'>{user.doctor.doctor_clinic_address}</label><br />

            </div>
                 <div>
                   <center><Button variant="success" buttonStyle='btn--secondary' setPage='/addSlot'>Add Slot</Button>
                   
                    <Button buttonStyle='btn--secondary' setPage='/viewSlot'>View Booked Slots</Button>
                     </center>
                  </div>
  
          </form>
       </div>
    </div>

    
 
    <Footer />
    </>

        
        
        )
}
 export default DocProfile;


           