import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/panda.svg'
import menulog from '../../assets/menu.png'
import sunny from '../../assets/sunny.png'
import moon from '../../assets/moon.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {

  const [isDark, setIsDark] = useState(false);
    const iconRef = useRef(null);

    const changetheme = () => {
        document.body.classList.toggle("dark-theme");
        setIsDark(!isDark);
    };

  const [menu,setmenu]=useState("home");
  const menuRef=useRef();
  
  const openmenu=()=>{
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    menuRef.current.classList.add("show");
    menuRef.current.style.display = "flex";
    setTimeout(() => {
      menuRef.current.style.right = "0";   // Slide in
  }, 10);

  }
  const closemenu=()=>{
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    menuRef.current.classList.remove("show");
    menuRef.current.style.right = "-100%";  
    setTimeout(() => {
        menuRef.current.style.display = "none"; 
    }, 300); 
  }

  const closemenuBar=()=>{
    menuRef.current.classList.remove("show");
    menuRef.current.style.right = "-100%";  
    setTimeout(() => {
      menuRef.current.style.display = "none"; 
    }, 300); 
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
  }
  return (
    
        <div  data-aos="zoom-out" data-aos-once="true" className="navbar">
    <div className="overlay" onClick={closemenuBar}></div>

            <img src={logo} alt="img" className='nav-logo'  onClick={()=>setmenu("")}/>
            <span className="material-symbols-outlined nav-mob-open"onClick={openmenu}>menu</span>
            <ul ref={menuRef} className="nav-menu">
            <span className="material-symbols-outlined nav-mob-close" onClick={closemenu}>close</span>
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p 
                onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr />: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<hr />: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<hr />: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setmenu("work")}>Projects</p></AnchorLink>{menu==="work"?<hr />: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr />: <></>}</li>
            </ul>
            <img 
                ref={iconRef}
                className="nav-sunny" 
                onClick={changetheme} 
                src={isDark ? moon : sunny} 
                alt="theme-icon" 
            />
            {/* <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Connect with me</p></AnchorLink></div> */}
        </div>
  )
}

export default Navbar
