import React from 'react'
import skills from '../../assets/skill'
import './Skills.css'
const Skills = () => {
  return (
    <div className="skills-box">
    <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        {
          skills.map((skill, index) => (
            <div key={index} className="skill-card">
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
                {/* {
                    skill.image.map((img,indx)=>(
                        <img className='skill-img' key={indx} src={img} alt="logo" />
                    ))
                } */}
              </div>
            </div>
          ))
        }
      
    </div>
  </div>
  )
}

export default Skills
