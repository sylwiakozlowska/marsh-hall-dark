import React from "react";
// import aboutpic from "../home/assets/original-about.png";
import colourChart from "../home/assets/homepic800x600.png";

function About() {
  return (
    <div className="about-component">
      <div className="about-info">
        <h3 className="title is-3">About us</h3>
        <div className="info">
          <p>
            Established in London working together with specialist painters and
            decorators for over five years. With over 50 years’ experience
            combined we guarantee pride with our work and customer service.
            Working in all areas of London we travel beyond the M25 and have a
            team who have worked all over Europe. We use specialist tools that
            not only provide the best possible finishes with long lasting
            durability but also keep our dust(with our dust extractors) to a
            minimum, something our clients regard an essential considering we
            work in domestic properties with families still at home while we
            work. Our cleanliness has always been at the forefront of our
            working day, given our current climate we acknowledge the extra care
            this aspect of our service provides. Trust is another obvious
            fundamental, having the keys to our client’s castles is of the
            upmost importance in making them feel at ease with us in their homes
            while they’re out or away.
          </p>
        </div>
      </div>
      <div className="team-info">
        <h3 className="title is-3">Meet the Team leaders</h3>
        <h5 className="name title is-5">Graeme</h5>
        <div className="team columns">
          <div className="column is-one-quarter">
            <figure className="photo is-128x128">
              <img src={colourChart} alt="hello" />
            </figure>
          </div>
          <p className="column auto">
            I was born by the seaside but have lived in London, raised in
            Pimlico since I was three. Very proud of my city roots, I consider
            it my duty as a host and neighbour to be hospitable and kind to all
            my fellow Londoners and visitors. I am a family man with two
            children, 18 and 10 who are very much a part of my life and are
            often my inspiration for each rolling week that passes us by. I
            found painting and decorating as a youngster after I’d finished
            school in my twenties. It is only recently that I decided to take it
            more seriously and as a result have started a company with one of my
            oldest and newest friends to form the close-knit team we are today!
          </p>
        </div>
        <h5 className="name title is-5">Olly</h5>
        <div className="team columns ">
          <div className="column is-one-quarter">
            <figure className="photo is-128x128">
              <img src={colourChart} alt="hello" />
            </figure>
          </div>
          <p className="column auto">
            Hi, I’m Olly, born and bred in West London, now living in Ealing
            with my two children. I first started working as a painter and
            decorator in my late teens and have over 20 years experience in the
            trade. I lead a relaxed, stress free service to make having your
            home or office decorated an easy and enjoyable experience! We pride
            ourselves on providing a long lasting, hi quality finish all done
            with charm and a smile!
          </p>
        </div>
        <h5 className="name title is-5">Cristi</h5>
        <div className="team columns">
          <div className="column is-one-quarter">
            <figure className="photo is-128x128">
              <img src={colourChart} alt="hello" />
            </figure>
          </div>
          <p className="column auto">
            Hi, I’m Cristi from Romania. I came to England in 2013 and have been
            painting since 2007 where I lived in Athens, Greece. I came to
            England for a better life and five years ago I met Graeme and Olly
            who I’ve worked with ever since. I feel like London is my home now
            and love my life here. So far everything I planned has come true and
            now I have some great English friends who have decided to make a
            business with me. I speak Romanian and Greek as well as English
            though the boys are still trying to improve my cockney rhyming
            slang. You wouldn’t Adam and Eve it! Over the years painting and
            decorating has become my life and passion, we’re very excited and
            proud to be starting our new business!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
