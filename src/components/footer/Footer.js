import React from "react";

function Footer() {
  return (
    <div className="footer-component">
      <div className="title">
        <h5>M&H Painters</h5>
      </div>
      <div className="content">
        <div className="info">
            <div className="follow">
            <h5>Follow</h5>
            </div>
            <i className="fb-icon fab fa-facebook-f"></i>
            <i className="insta-icon fab fa-instagram"></i>
        </div>
        <div className="info">
            <h5>Contact</h5>
            <p>graeme@marsh-hallpainters.com</p>
            <p>07801525121</p>
        </div>
        <div className="info">
            <h5>Address</h5>
            <p>34 Upper Tachbrook Street,<br></br>SW1V 1SW, <br></br>London</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
