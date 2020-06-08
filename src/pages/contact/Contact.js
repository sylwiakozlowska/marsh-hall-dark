import React from "react";
import GoogleMap from "../../components/google-map/GoogleMap";

function Contact() {
  return (
    <div className="contact-component page">
      <div className="contact-details">
        <h1 className="title is-1">We'd like to hear from you</h1>
        <div className="address multiline">
          {"34 Upper Tachbrook Street\nSW1V 1SW\nLondon\n07801525121"}
        </div>
      </div>
      <div className="contact-form">
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
