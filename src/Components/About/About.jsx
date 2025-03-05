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
        <div className="about-left">
          <img src={myimage} alt="img" />
        </div>
        <div className="about-right">
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
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
