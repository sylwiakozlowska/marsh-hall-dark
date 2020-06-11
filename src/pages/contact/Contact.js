import React, { useState } from "react";
import Map from "../../components/map/Map";

function Contact() {
  const [infoboxMessage, setInfoboxMessage] = useState("");
  const [isInfoboxVisible, setIsInfoboxVisible] = useState(false);
  const [markerLang, setMarkerLang] = useState(0);
  const [markerLat, setMarkerLat] = useState(0);

  const handleMarkerClick = (message, lang, lat) => {
      setInfoboxMessage(message); // Message shown in info window
      setIsInfoboxVisible(current => !current); // Show info window
      setMarkerLang(lang + 0.006); // Y coordinate for positioning info window
      setMarkerLat(lat - 0.0004); // X coordinate for positioning info window
  }

  const handleInfoboxClick = () => {
      setIsInfoboxVisible(false);
  }

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

      <div style={{ width: "100%", height: "300px" }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAz11B4GW_29EsqMIvJLG0Ay49CrFDvQ98"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          isInfoboxVisible={isInfoboxVisible} // Show/hide info window
          infoboxMessage={infoboxMessage} // Message shown in info window
          handleInfoboxClick={handleInfoboxClick} // Handle closing of the info window
          handleMarkerClick={handleMarkerClick} // Handle click on Marker component
          infoboxPosY={markerLang} // Y coordinate for positioning info window
          infoboxPosX={markerLat} // X coordinate for positioning info window
        />
      </div>
    </div>
  );
}
// googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAz11B4GW_29EsqMIvJLG0Ay49CrFDvQ98&v=3.exp&libraries=geometry,drawing,places"

export default Contact;
