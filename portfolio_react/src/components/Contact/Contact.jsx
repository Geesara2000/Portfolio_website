import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "782a4aab-94ed-4dc5-b571-615219bf80a4");

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
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>

      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm Geesara De Silva, an undergraduate student at Sabaragamuwa University of Sri Lanka, pursuing a degree in Computing and Information Systems. I am passionate about technology and am working towards becoming a skilled full-stack developer.</p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" /><p>geesaradesilva92@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="" /><p>+94 76 852 7720</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" /><p>Sri lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter Your name' name="name"  />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your email' name="email"  />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>

    </div>
  )
}

export default Contact