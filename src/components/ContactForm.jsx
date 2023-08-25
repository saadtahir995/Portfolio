import React,{useState} from 'react';
import '../style/ContactForm.css';
import { useMediaQuery } from 'react-responsive';

const ContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [formDetails, setFormDetails] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const Handlesubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDetails)
    };
    const url=import.meta.env.VITE_BACKEND_API;
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        alert('Your message has been sent!');
        setFormDetails({
          Name: '',
          Email: '',
          Message: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      }
  return (
    <div className="contact-form-container" style={{width: isMobile &&'100%'}}>
      <h2 className="contact-form-title">Get in Touch</h2>
      <form className="contact-form" onSubmit={Handlesubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" id="name" name="name" className="form-control" value={formDetails.Name}required onChange={(e)=>{
            setFormDetails({...formDetails, Name: e.target.value})

          }} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" id="email" name="email" className="form-control" required value={formDetails.Email}  onChange={(e)=>{
            setFormDetails({...formDetails, Email: e.target.value})
          }} />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" rows="5" className="form-control" required value={formDetails.Message} onChange={(e)=>{
            setFormDetails({...formDetails, Message: e.target.value})
          }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
