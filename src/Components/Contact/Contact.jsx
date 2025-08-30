import React from 'react'
import './Contact.css'
import call from '../../assets/call.svg'
import message from '../../assets/message.svg'
import location from '../../assets/location.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "45d94696-dbec-43dd-8a3b-3b56274e9aef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src="s.svg" alt="img" /> */}
      </div>
      <div data-aos="fade-right" className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>hi contact me for develop your project </p>
          <div className="contact-details">
            <div className="contact-detail">
              <span class="material-symbols-outlined">
                mail
              </span><p>abhiaditya926@gmail.com</p>
            </div>
            <div className="contact-detail">
              <span class="material-symbols-outlined">
                call
              </span><p>8979742479</p>
            </div>
            <div className="contact-detail">
              <span class="material-symbols-outlined">
                location_on
              </span><p>Bareilly, Uttar Pradesh</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="contact-right">
        <form  onSubmit={onSubmit} >
          <label htmlFor="">Your Name</label>
          <input className='name-input' type="text" placeholder='Enter your name' name="name" id="" />
          <label htmlFor="">Your Email</label>
          <input className='email-input' type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your Message here</label>
          <textarea className='txt-input' name="message" placeholder='Enter your message' id=""></textarea>
          <button className='contact-submit' type='submit'>Submit</button>

        </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
