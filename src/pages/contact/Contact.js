import React from "react";
import GoogleMap from "../../components/google-map/GoogleMap";

function Contact() {
  return (
    <div className="contact-component">
      <div className="content">
        <h1 className="title is-1">We'd like to hear from you</h1>
        <p>
          34 Upper Tachbrook Street,<br></br>SW1V 1SW, <br></br>London
        </p>
        <p>07801525121</p>
      </div>
      <div className="form-contact">
        <form action="#">
          <div className="field">
            <div className="control" />
            <input className="input" type="text" placeholder="Name" />
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Subject" />
            </div>
          </div>
          <textarea
            className="textarea"
            placeholder="Write your message here..."
          ></textarea>
          <div className="submit-button control">
            <button className="button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      <GoogleMap />
    </div>
  );
}

export default Contact;
