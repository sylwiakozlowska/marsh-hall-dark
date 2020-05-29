import React from "react";
import colourChart from "./assets/colour_chart.png";
import Testimonials from "../../components/testimonials/Testimonials";


function Home() {
  return (
    <div className="home-component">
      <div className="main-content">
        <img
          className="home-picture"
          src={colourChart}
          alt="content"
          width="50%"
        />
        <div className="content-text">
          <h1>M&amp;nH Painters</h1>
          <h3>For all your painting and decorative needs</h3>
          <p>
            Established in London working together with specialist painters and
            decorators for over five years. With over 50 years experience
            combined we guarantee pride with our work and customer services.
          </p>
        </div>
      </div>
      <div className="testimonials-wrap"><Testimonials /></div>
    </div>
  );
}

export default Home;
