import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Resume.pdf'

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; // Use the imported file
    link.download = "My_Resume.pdf"; // Name for the downloaded file
    link.click();
  };

  return (
    <div id='home' className='hero'>
      <img className='pic' src={profile_img} alt="" />
      <h1><span>I'm Abhishek,</span> Frontend Developer in India</h1>
      <p>I am frontend Developer from India, Now i am a fresher</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='connectlink'   href='#contact'> Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleDownload}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
