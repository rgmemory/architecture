import React, { Component, useState } from "react";
import Reusable from "../Reusable/Reusable";

import Office1 from "./Office1.jpg";
import Office2 from "./Office2.jpg";
import Office3 from "./Office3.jpg";
import Jewlery1 from "./Jewlery1.jpg";
import Jewlery2 from "./Jewlery2.jpg";
import Jewlery3 from "./Jewlery3.jpg";
import Dealership1 from "./Dealership1.jpg";
import Dealership2 from "./Dealership2.jpg";

export default function Commerical() {
  const [commericalInfo] = useState([
    {
      quote: `Since I’m a businessman not a designer, I’ve used your services on
      numerous occasions. My clients (and I) love to see all the innovative
      options. The designs make my projects stand out.`,
      quoteAttribute: `Merlin Jay Hardy, General Contractor/Developer`
    },
    {
      title: "Office Building",
      image1: Office1,
      image2: Office2,
      image3: Office3,
      summary:
        "Traditional brick veneer combined with playful ribbons of curving glass block, windows and dramatic shade trellis/arbor elements make this orthopedic/sports medicine physicians offices comfortable, warm, inviting, and minimizes the commercial feel. Similarly rendered two story speculative offices are planned to create a central courtyard with the doctors large office."
    },
    {
      title: "Jewelry Stores at Retail Malls",
      image1: Jewlery1,
      image2: Jewlery2,
      summary:
        "The store at the Forum Shops at Caesars Palace is extremely small. The need to maximize the display cases, combined with a need for a vehicle to make the space feel as large as possible, gave rise to “vertical cases” set in a grid, marching artificially off into precisely adjusted mirrored walls. The gem-like qualities of the space are enhanced by these “classical” butt glazed “column”/showcases and polished marble accents. The jeweled labyrinth, seemingly four times larger than it is, has the sense of a classical cloister with the sponge painted sheet metal and metal pipe “rib vaults” under the otherwise black painted exposed structure and mechanical elements above. These show case columns have the desired effect of attracting shoppers into and throughout the store from column to column. We even created a booklet of about 72 display ideas to help the sales people use these column/showcases to their potential."
    },
    {
      title: "Mall Jewelry Store – Exterior",
      image1: Jewlery3,
      summary:
        "This Store design took advantage of its prominent corner by opening up the store to the mall and blurring the lines between mall and store. The center showcase element takes its image from gems emerging from natural stone. The butt glass and polished marble showcases attract potential customers and help draw them into the store."
    },
    {
      title: "Automobile Dealership",
      image1: Dealership1,
      image2: Dealership2,
      summary:
        "The Design was selected from options including this axonometric sketch.  This project was designed while employed by Welles-Pugsley Architects and constructed by Fremont Construction."
    }
  ]);

  let displayCommericalInfo = commericalInfo.map(current => {
    return (
      <Reusable
        quote={current.quote}
        quoteAttribute={current.quoteAttribute}
        title={current.title}
        image1={current.image1}
        image2={current.image2}
        image3={current.image3}
        summary={current.summary}
      />
    );
  });
  return (
    <div>
      <div>Featured Commerical Solutions</div>

      {displayCommericalInfo}
    </div>
  );
}
