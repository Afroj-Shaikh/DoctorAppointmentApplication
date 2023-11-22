import React from 'react'
import '../Styles/App.css';
import { Button } from './Button';
import '../Styles/Banner.css';
function Banner() {
    return (
        <div className="banner-container">
            <video src="/videos/1.mp4" autoPlay loop muted />
            <h1>Healthy Lifestyle Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="banner-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' setPage='/login' >
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default Banner
