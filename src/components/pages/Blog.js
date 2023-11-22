import React from 'react'
import '../../Styles/App.css'
import Carditem from '../Carditem'
import '../../Styles/Cards.css'
import Footer from '../Footer'
import Navbar from '../Navbar'



function Blog() {
    return (
        <>
        <Navbar/>
        <div>
            <div className="cards">
                    <h1>Health Blogs</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <Carditem 
                            src="images/covid.jpg"
                            text="10 things to stay away from Covid-19"
                            label="Covid"
                            path="blog/covid"
                            />
                        </ul>
                        <ul className="cards__items">
                            <Carditem 
                            src="images/Cardio.png"
                            text="10 healthy habits to avoid Heart-Attack"
                            label="Cardiology"
                            path="blog/cardio"
                            />
                        </ul>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
        </>
    )
}

export default Blog
