import React from 'react'
import './Services.css'
import service_data from '../../assets/Service_data'
import arrow from '../../assets/arrow.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src="se.svg" alt="img" /> */}
      </div>
      <div className="services-container">
        {service_data.map((service,index)=>{
            return <div key={index} data-aos="fade-up" className='services-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                {/* <div className='services-readmore'>
                    <p>Read more</p>
                    <span class="material-symbols-outlined">arrow_forward</span>
                </div> */}
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
