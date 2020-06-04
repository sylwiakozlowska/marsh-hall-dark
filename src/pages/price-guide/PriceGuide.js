import React from "react";

function PriceGuide() {
  const data = [
    {
      title: "Painting:",
      factors: [
        "The number of cracks in a wall",
        "The brand of paint which might cost more or less",
      ],
    },
    {
      title: "Wallpaper:",
      factors: [
        "Stripping wallpaper",
        "The level of damage after the wallpaper has been stripped",
        "How much filler is necessary for your wall",
      ],
    },
    {
      title: "Woodwork:",
      factors: [
        "The level of sanding for the old woodwork",
        "Was the woodwork previously painted with an old 30 year old oil base paint",
        "Is it new untreated woodwork that will require four coats of paint including a primer",
      ],
    },
  ];

  const elem = data.map(({ title, factors }) => (
    <div key={title} className="content">
      <h3 className="title is-5">{title}</h3>
      <ul>
        {factors.map((factor, i) => (
          <li key={i} className="item-list">
            {factor}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="price-component">
      <div className="component">
        <h1 className="title is-3">
          A few factors that may influence the price:
        </h1>
        <p>
          The main reason for this guide with our business is to explain the
          different factors within our trade. Our trade is different to others
          in that there are so many aspects that can affect the price of
          painting a space. Marsh and hall provides high standard finishes and
          negociable prices.
        </p>
      </div>
      {elem}
    </div>
  );
}

export default PriceGuide;
