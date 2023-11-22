
import React, { Component } from 'react'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Cards from '../Cards';
import LoginNavbar from '../LoginNavbar'
import '../../Styles/PatInfo.css'



export default class PatProfile extends Component {
    constructor() {
        super();
        this.state = {
            rnd: false,
            patient: {}
        }

    }

    fun() {
        if (!this.state.rnd) {
            this.forceUpdate();
        }
    }

    async componentDidMount() {
        console.log("in =========================cmwmnt")
        this.setState({
            rnd: true,
            patient: JSON.parse(window.sessionStorage.getItem("puser-profile"))
        })
    }

    handleLogout = () => {
        window.sessionStorage.clear();
    }
    render() {
        return (
            <>
                <LoginNavbar />
                <div className='form-container-patinfo'>

                    <div className='form-content-center'>
                        <form className='form'  >

                            <h1><label className='key-label'>Patient Information   </label></h1>

                            <div className='form-inputs' >
                                <label className='key-label'>Full Name :   </label>
                                <label className='value-label'>{this.state.patient.user_full_name}</label><br />
                                <label className='key-label'>Address : </label>
                                <label className='value-label'>{this.state.patient.user_address}</label><br />
                                <label className='key-label'>Phone Number : </label>
                                <label className='value-label'>{this.state.patient.user_phone_number}</label><br />
                                <label className='key-label'>Email : </label>
                                <label className='value-label'>{this.state.patient.user_email}</label><br />
                                <label className='key-label'>Emergency Contact Number : </label>
                                <label className='value-label'>{this.state.patient.patient_emergency_contact}</label><br />
                                <label className='key-label'>Health Problem : </label>
                                <label className='value-label'>{this.state.patient.patient_health_problem}</label>

                            </div>
                        </form>
                    </div>
                </div>
                <Cards />
                <Footer />

            </>
        )
    }
}
