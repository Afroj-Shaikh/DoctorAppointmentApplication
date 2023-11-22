import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import '../../Styles/Login.css'
import UserService from '../../service/UserService'
import { useHistory } from "react-router-dom";
import DoctorService from '../../service/DoctorService'
import PatientService from '../../service/PatientService'
import Navbar from '../Navbar'



function Login() {

    const history = useHistory();
    const [values, setValues] = useState({
        user_email: '',
        user_password: ''
    })
    const [valid, setValid] = useState({
        msg: ''
    })
    const handleChange = e => {
        const { name, value } = e.target;
        // console.log(name);

        setValues({
            ...values,
            [name]: value
        });


    };

    const handleSubmit = (e) => {
        console.log("in form     " + values);
        e.preventDefault();
        UserService.validate(values).then((response) => {

            if (!response.data) {
                setValid({
                    msg: "Wrong Credentials ! Please try again."
                })
            }
            else {


                if (response.data.user_role === 'doctor') {
                    DoctorService.getDoctorById(response.data.user_id).then((r) => {
                        console.log(r.data + "    rdata printed");
                        window.sessionStorage.clear()
                        window.sessionStorage.setItem("docID", r.data.user_id)
                        window.sessionStorage.setItem("ruser-profile", JSON.stringify(r.data))
                        history.push({pathname:'/doc',
                        state:{
                            doctor:r.data
                        }
                    });
                    })

                   
                } else if (response.data.user_role === 'patient') {
                    PatientService.getPatientById(response.data.user_id).then((r) => {
                        console.log(r.data + "    rdata printed");
                        window.sessionStorage.clear()
                        window.sessionStorage.setItem("patID", r.data.user_id)
                        window.sessionStorage.setItem("puser-profile", JSON.stringify(r.data));

                        history.push({
                            pathname: '/pat',
                            state: {

                               patient:r.data

                            }
                        });
                    })

                }
            }
        })
        // DoctorService.addDoctor(values).then((response)=>{
        //   console.log("Doctor From Server "+response.data);
    }


    return (
        <>
        <Navbar/>
        <div className='form-container-login'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
            <img className='form-img' src='/images/log.jpg' alt='Doctor' />
          </div>

          <div className='form-content-right'>
      <h1 id='tag'></h1>
      <form className='form' >
        <h1>
          Login and Enjoy your journey
        </h1>
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
        <button className='form-input-btn-login' onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>


        </div>
          <Footer />
        </>
        /* <div className='form-container-top'>

            <div className='form-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div className="form-container">
                                <div className="form-icon">
                                    <i className="fa fa-user-edit"></i>
                                </div>
                                <h3 className="title">User Login</h3>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-user"></i></span>
                                        <input className="form-control" name="user_email" type="email" placeholder="Enter Your Email" value={values.user_email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                                        <input className="form-control" name="user_password" type="password" placeholder="Enter Password" value={values.user_password} onChange={handleChange} />
                                    </div>
                                    <span className="forgot-pass"><Link to="#">Forgot Password ?</Link></span>
                                    <button className="btn signin" onClick={handleSubmit}>Login</button>
                                </form>
                                <span className="user-signup">Don't Have an Account? <Link to="/patientSignUp">Create Now !</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div> */
    )
}

export default Login
