import React from "react";
import Testimonials from "../../components/testimonials/Testimonials";
import colourChart from "./assets/homepic800x600.png";

function Home() {
  return (
    <div className="home-component page">
      <div className="main-content">
        <img
          className="main-picture"
          src={colourChart}
          alt="content"
        />
        <div className="main-text">
          <h1 className="title is-1">M&amp;H Painters</h1>
          <h4 className="subtitle is-4">For all your painting and decorative needs</h4>
          <p className="company-background">
            Established in London working together with specialist painters and
            decorators for over five years. With over 50 years experience
            combined we guarantee pride with our work and customer services.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default Home;
