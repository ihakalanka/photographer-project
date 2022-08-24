import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:8080/api/send-mail`, {
      name,
      mobileNo: phoneNumber,
      email,
      message
    })
      .then(() => {
        toast.success('Successfully Sent', {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error('Something Wrong', {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
  }

  const validation = (e) => {
    const emailVAlidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!(emailVAlidation.test(email))){
      setIsError("Enter Correct Email Address");
    }
    else {
      setIsError("");
    }
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

          <>
            <ToastContainer />
          </>

          <div className>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <form action>
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Name" required onChange={(e) => {
                          setName(e.target.value)
                        }} />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" required onChange={(e) => {
                          setPhoneNumber(e.target.value)
                        }} />
                      </div>
                      <div>
                      <span style={{ color: "red", fontSize: "16px" }}>{isError}</span>
                      <br/>
                        <input type="email" placeholder="Email" required onChange={(e) => {
                          setEmail(e.target.value);
                          validation(e);
                        }} />
                      </div>
                      <div className>
                        <input type="text" placeholder="Message" className="message_input" required onChange={(e) => {
                          setMessage(e.target.value)
                        }} />
                      </div>
                      <div className=" d-flex justify-content-center ">
                        <button type="submit" onClick={submit} 
                        disabled={!name || !phoneNumber || !email || !message || isError}
                        >
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
