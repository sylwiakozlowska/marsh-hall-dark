import React from "react";
import color from "../home/assets/colorconsultation.png";
import floor from "../home/assets/floor1.png";
// import floor from "../home/assets/floor2.png";
// import floor from "../home/assets/floor3.png";
import window from "../home/assets/window1.png";
// import window from "../home/assets/window2.png";
// import window from "../home/assets/window3.png";
import wallpaper from "../home/assets/wallpaper1.png";
// import wallpaper from "../home/assets/wallpaper2.png";
// import roof from "../home/assets/roof1.png";
// import roof from "../home/assets/roof2.png";
// import roof from "../home/assets/roof3.png";
// import roof from "../home/assets/roof4.png";
import roof from "../home/assets/roof5.png";
import interior from "../home/assets/interior.png";

function Services() {
  return (
    <div className="services-component">
      <div className="services-content ">
        <h1 className="title is-1">Our Services</h1>
        <div className="top columns ">
          <div className="column is-one-third">
            <figure className="is-128x128">
              <img src={interior} alt="services"></img>
            </figure>
            <h3 className="title is-3">
              Interior & Exterior Painting/Decorating
            </h3>
          </div>
          <div className="column is-one-third">
            <figure className="is-128x128">
              <img src={wallpaper} alt="services"></img>
            </figure>
            <h3 className="title is-3">Wallpaper Installation</h3>
          </div>
          <div className="column is-one-third">
            <figure className="is-128x128">
              <img src={floor} alt="services"></img>
            </figure>
            <h3 className="title is-3">Floor Installation</h3>
          </div>
        </div>
        <div className="bottom columns">
          <div className="column is-one-third">
            <figure className="is-128x128">
              <img src={roof} alt="services"></img>
            </figure>
            <h3 className="title is-3">Roofing</h3>
          </div>
          <div className="column is-one-third">
            <figure className="is-128x128">
              <img src={color} alt="services"></img>
            </figure>
            <h3 className="title is-3">Colour Consultation</h3>
          </div>
          <div className="column is-one-third">
            <figure className="is-128x128">
              <img src={window} alt="services"></img>
            </figure>
            <h3 className="title is-3">Window Cleaning</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
