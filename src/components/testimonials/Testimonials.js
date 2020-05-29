import React from "react";
import Slider from "infinite-react-carousel";

export default () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    wheelScroll: 4,
    dots: true,
    centerPadding: 60,
  };

  return (
    <div className="testimonials-component">
      <Slider {...settings}>
        <div className="content">
          <i className="fas fa-quote-right fa-2x"></i>
          <p>
            I am an Interior designer and take pride in my home. I will be using
            Marsh & Hall again for personal work and professional. Service is
            key in the industry and I can rely on Graeme, Oly and their team to
            carry out how I like to work.
          </p>
          <h5>Mathew Godley</h5>
        </div>
        <div className="content">
          <i className="fas fa-quote-right fa-2x"></i>
          <p>
            Graeme and team did an excellent job refreshing my flat from a
            run-down rental to a shiny and sleek home. They painted, plastered,
            refinished floors, built custom bookshelves, and hung several pieces
            of art. The team was always very professional and reliable. I would
            absolutely recommend them for similar jobs.
          </p>
          <h5>Louis D</h5>
        </div>
        <div className="content">
          <i className="fas fa-quote-right fa-2x"></i>
          <p>
            I recently used Graeme and his team for a complete redecoration of
            my lounge and was really pleased with the work. Great attention to
            detail, help thinking about what I wanted, all the work done on time
            and as planned and they were even patient with my overly curious
            dog. I will definitely use them again in future.
          </p>
          <h5>Anna</h5>
        </div>
      </Slider>
    </div>
  );
};
