import useFetch from "../useFetch";
import React from 'react';
import { useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Contact = () => {

  const { error, isPending, data:contacts } = useFetch('https://portfolio-me-app.herokuapp.com/api/homeSettings');

    const mystyle = {
      width: "110%",
      height: "660px",
      frameborder: "0",
      border: "0"
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, email, subject, message };
    fetch('https://portfolio-me-app.herokuapp.com/api/contact', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            // console.log(response);
            toast('Thank You for your Message!!');
          } else {
            toast('Opps! Something Went Wrong');
          // console.log('Somthing happened wrong');
          }
    }).catch(err => err);
  }

    return ( 
        <div id="contact" class="contact-us section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div
              class="section-heading wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              {/* <h6>Contact Us</h6> */}
              <h4>Get In Touch with <em>Me</em></h4>
              <div class="line-dec"></div>
            </div>
          </div>
          <div
            class="col-lg-12 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.25s"
          >
            <form id="contact" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-lg-12">
                  <div class="contact-dec">
                  </div>
                </div>
                <div class="col-lg-5">
                  <div id="map">
                  { error && <div>{ error }</div> }
                    { isPending && <div>Loading...</div> }
                    { contacts && contacts.data.map((contact) =>(
                        <iframe src={contact.location}
                        style={mystyle} allowFullScreen></iframe>
                        ))
                    }
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="fill-form">
                    <div class="row">

                    { error && <div>{ error }</div> }
                    { isPending && <div>Loading...</div> }
                    { contacts && <ConTactSetting contacts={contacts} /> }
                      


                      <div class="col-lg-6">
                        <fieldset>
                          <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </fieldset>
                        <fieldset>
                          <input 
                            type="email" 
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </fieldset>
                        <fieldset>
                        <input 
                            type="text" 
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div class="col-lg-6">
                        <fieldset>
                          <textarea
                            type="text" 
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            class="main-button"
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Contact;
const ConTactSetting = ({ contacts }) => (
  <>
    <div class="row">
    {contacts.data.map((contact) =>(   
        <React.Fragment>
          <div class="col-lg-6">
                        <div class="info-post">
                          <div class="icon">
                            <img src="assets/images/phone-icon.png" alt="" />
                            <a href="javascript.void()">{contact.contact_no}</a>
                          </div>
                        </div>
                      </div>
                      {/* <div class="col-lg-4">
                        <div class="info-post">
                          <div class="icon">
                            <img src="assets/images/email-icon.png" alt="" />
                            <a href="javascript.void()">shakya.sanish8198<br/>@gmail.com</a>
                          </div>
                        </div>
                      </div> */}
                      <div class="col-lg-6">
                        <div class="info-post">
                          <div class="icon">
                            <img src="assets/images/location-icon.png" alt="" />
                            <a href="javascript.void()">{contact.address}</a>
                          </div>
                        </div>
                      </div>
        </React.Fragment>                   
    ))}
    </div>
  </>
);