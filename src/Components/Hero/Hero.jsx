import React ,{useEffect,useRef} from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Resume.pdf'
import Typed from 'typed.js'

const Hero = () => {
// const el=useRef(null); //element where typing happens
// const typed=useRef(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume; // Use the imported file
    link.download = "My_Resume.pdf"; // Name for the downloaded file
    link.click();
  };

  // useEffect(()=>{
  //   typed.current=new Typed(el.current,{
  //     strings:[" Frontend Developer in India", "Welcome to my Website", "Typing Effect in React"],
  //     typeSpeed: 50,
  //     backSpeed: 25,
  //     backDelay: 1500,
  //     loop: true,
  //   });

  //   return()=>{
  //     typed.current.destroy(); //destroy on  unmount
  //   }
  // },[]);


  return (
    <div id='home' className='hero'>
      <img data-aos="zoom-in" className='pic' src={profile_img} alt="" />
      <h1><span>I'm Abhishek,</span>Frontend Developer in India</h1>
      <p>I am frontend Developer from India, Now i am a fresher</p>
      <div className="hero-action">
        <div data-aos="zoom-in" className="hero-connect"><AnchorLink className='connectlink'   href='#contact'> Connect with me</AnchorLink></div>
        <div data-aos="zoom-in" className="hero-resume" onClick={handleDownload}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
