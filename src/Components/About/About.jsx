import React from 'react'
import './About.css'
import theme_pattern from '../../assets/panda.svg'
import profile_img from '../../assets/panda.svg'
import myimage from '../../assets/mypic 2.jpg'


const About = () => {

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>
          About me
        </h1>
        {/* <img src="s.svg" alt="img" /> */}
      </div>
      <div className="about-secions">
        <div  data-aos="fade-right" className="about-left">
          <img  src={myimage} alt="img" />
        </div>
        <div data-aos="fade-left" className="about-right">
          <div className="about-para">
            <p>I am an experienced frontend developer with</p>
            <p>My passion for frontend development is not only</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>React js</p><hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{ width: '60%' }} /></div>
            <div className="about-skill"><p>Java</p><hr style={{ width: '55%' }} /></div>
          </div>
         
        </div>
      </div> 
    </div>
  )
}

export default About
