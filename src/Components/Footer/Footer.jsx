import React, { useEffect } from 'react'
import './Footer.css'
import insta from '../../assets/insta.jpg'
import linkedin from '../../assets/linkedin.png'
import utube from '../../assets/utube.png'
import x from '../../assets/x.png'
import facebook from '../../assets/facebook.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const Footer = () => {

    return (
        <div className='footer'>
            <div className="identity">
                <a href="https://www.instagram.com/maurya_ak24/" target='_blank'><img data-aos="zoom-in" src={insta} alt="insta" /></a>
                <a href="https://www.facebook.com/profile.php?id=100017003861841" target='_blank'><img data-aos="zoom-in" src={facebook} alt="insta" /></a>
                <a href="https://www.youtube.com/@MauryaAbhishek." target='_blank'><img data-aos="zoom-in" src={utube} alt="insta" /></a>
                <a href="https://x.com/Abhishe49901996" target='_blank'><img data-aos="zoom-in" src={x} alt="insta" /></a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-7a4a41252/" target='_blank'><img data-aos="zoom-in" src={linkedin} alt="insta" /></a>
            </div>
            <hr />
            <div data-aos="zoom-out" className="lowerfooter">
                <p>© 2025 Abhishek Kumar.All rights reserved.</p>
                <div className="lowerfooter-rights">
                    <span>Term of Services</span>
                    <span> Privacy Policy</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
