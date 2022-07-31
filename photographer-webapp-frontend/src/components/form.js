import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await axios.post('API', {
      name,
      phoneNumber,
      email,
      message
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="bg-img1">
          <img src="images/bg-img-1.png" alt="" />
        </div>
        <div className="bg-img2">
          <img src="images/bg-img-2.png" alt="" />
        </div>
        <div className="container">
          <div className="heading_container">
            <h2>
              Contact Us
            </h2>
          </div>
          <div className>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <form action>
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Name" required onChange={(e) => {
                          setName(e.target.value)
                        }}/>
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" required onChange={(e) => {
                          setPhoneNumber(e.target.value)
                        }} />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" required onChange={(e) => {
                          setEmail(e.target.value)
                        }} />
                      </div>
                      <div className>
                        <input type="text" placeholder="Message" className="message_input" required onChange={(e) => {
                          setMessage(e.target.value)
                        }} />
                      </div>
                      <div className=" d-flex justify-content-center ">
                        <button type="submit" onClick={submit}>
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
