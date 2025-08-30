import React from 'react'
import skills from '../../assets/skill'
import './Skills.css'
import { useEffect } from 'react'
const Skills = () => {

  useEffect(() => {
    const revealElements = document.querySelectorAll(".revealAnimation");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Optional: reveal once
          }
        });
      },
      {
        threshold: 0.2, // adjust for more or less visible area
        rootMargin: "0px 0px -50px 0px" // adjust as needed
      }
    );
  
    revealElements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="skills-box">
    <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        {
          skills.map((skill, index) => (
            <div key={index} className="skill-card revealAnimation">
              <h2  className='skill-category'>{skill.category}</h2>
              <div className="skill-list">
                {
                  skill.technologies.map((tech, idx) => (
                    <>
                    <span className='skill-img-name'>
                     <img className='skill-img' key={idx} src={skill.image[idx]} alt="logo" />
                     <span key={idx} className='skill-name'>{tech}</span>
                    </span>
                    </>
                  ))
                }
              </div>
            </div>
          ))
        }
      
    </div>
  </div>
  )
}

export default Skills
