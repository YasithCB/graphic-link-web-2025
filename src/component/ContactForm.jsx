import React, { useRef } from "react";
import emailJs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Reset form
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
      <div className="contact-wrap w-100 p-md-5 p-4">
        <h3 className="mb-4 heading">Say Hello</h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          id="contactForm"
          name="contactForm"
          className="contactForm"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="label" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <label className="label" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-5">
              <div className="form-group">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn custom-btn" />
                <div className="submitting"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
