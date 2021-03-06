import React from "react";

function Footer() {
  return (
    <div className="footer-component">
      <div className="contact-details">
        <div className="info">
          <div className="follow">
            <h4 className="contact-title title is-4">Follow us</h4>
          </div>
          <i className="fb-icon fab fa-facebook-f"></i>
          <i className="insta-icon fab fa-instagram"></i>
        </div>
        <div className="info">
          <h4 className="contact-title title is-4">Contact us</h4>
          <p>graeme@marsh-hallpainters.com</p>
          <p>07801525121</p>
        </div>
        <div className="info multiline">
          <h4 className="contact-title title is-4">Address</h4>
          {"34 Upper Tachbrook Street\nSW1V 1SW\nLondon"}
        </div>
      </div>
    </div>
  );
}

export default Footer;
