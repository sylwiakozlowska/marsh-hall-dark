import React from "react";
// import color from "../home/assets/colorconsultation.png";
import color from "../home/assets/colorconsultation_480by360.jpg";
// import floor from "../home/assets/floor1.png";
import floor from "../home/assets/floor1_480by360.jpg";
// import floor from "../home/assets/floor2.png";
// import floor from "../home/assets/floor3.png";
// import window from "../home/assets/window1.png";
import window from "../home/assets/window1_480by360.jpg";
// import window from "../home/assets/window2.png";
// import window from "../home/assets/window3.png";
// import wallpaper from "../home/assets/wallpaper1.png";
import wallpaper from "../home/assets/wallpaper1_480by360.jpg";
// import wallpaper from "../home/assets/wallpaper2.png";
// import roof from "../home/assets/roof1.png";
// import roof from "../home/assets/roof2.png";
// import roof from "../home/assets/roof3.png";
// import roof from "../home/assets/roof4.png";
// import roof from "../home/assets/roof5.png";
import roof from "../home/assets/roof5_480by360.jpg";
// import interior from "../home/assets/interior.png";
import interior from "../home/assets/interior_480by360.jpg";

function Services() {
  return (
    <div className="services-component page">
      <h1 className="title is-1">Our Services</h1>
      <div className="services">
        <div className="service-images">
          <figure className="image is-4by3">
            <img src={interior} alt="services"></img>
          </figure>
          <h3 className="title is-3">
            Interior &amp; Exterior Painting/Decorating
          </h3>
        </div>
        <div className="service-images">
          <figure className="image is-4by3">
            <img src={wallpaper} alt="services"></img>
          </figure>
          <h3 className="title is-3">Wallpaper Installation</h3>
        </div>
        <div className="service-images">
          <figure className="image is-4by3">
            <img src={floor} alt="services"></img>
          </figure>
          <h3 className="title is-3">Floor Installation</h3>
        </div>
        <div className="service-images">
          <figure className="image is-4by3">
            <img src={roof} alt="services"></img>
          </figure>
          <h3 className="title is-3">Roofing</h3>
        </div>
        <div className="service-images">
          <figure className="image is-4by3">
            <img src={color} alt="services"></img>
          </figure>
          <h3 className="title is-3">Colour Consultation</h3>
        </div>
        <div className="service-images">
          <figure className="image is-4by3">
            <img src={window} alt="services"></img>
          </figure>
          <h3 className="title is-3">Window Cleaning</h3>
        </div>
      </div>
    </div>
  );
}

export default Services;
