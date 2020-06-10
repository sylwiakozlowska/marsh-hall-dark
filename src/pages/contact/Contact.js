import React from "react";
// import GoogleMap from "../../components/google-map/GoogleMap";
// import MyMapComponent from "../../components/google-map/GoogleMap";
import Map from "../../components/map/Map"
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

      <div style={{width: "100%", height: "300px"}}>
        <Map 
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAz11B4GW_29EsqMIvJLG0Ay49CrFDvQ98"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
    // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAz11B4GW_29EsqMIvJLG0Ay49CrFDvQ98&v=3.exp&libraries=geometry,drawing,places"

export default Contact;
