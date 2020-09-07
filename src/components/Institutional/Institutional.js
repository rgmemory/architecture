import React, { Component, useState } from "react";
import Reusable from "../Reusable/Reusable";

import Church1 from "./Church1.jpg";
import Church2 from "./Church2.jpg";
import Law1 from "./Law1.jpg";
import Law2 from "./Law2.jpg";
import Sports1 from "./Sports1.jpg";
import Sports2 from "./Sports2.jpg";

export default function Commerical() {
  const [commericalInfo] = useState([
    {
      quote: `We are interested in including the projects you presented to us in the
    NREL/DOE Exemplary Buildings Program. Designs for the buildings at Eden
    Estates and the Museum at the MacDonald Center for the Arts and
    Humanities potentially can meet our program goal of reducing energy
    consumption by 70%…`,
      quoteAttribute: `Sheila J. Hayter, P.E. National Renewable Energy Laboratory.`
    },
    {
      title: "Churches",
      image1: Church1,
      image2: Church2,
      summary:
        "This large church was designed for the special uses that are most sacred to its members. Its design is based on the scriptures found in the 2nd chapter of Isaiah. “In the last days… the mountain of the Lords house shall be established in the top of the mountains and shall be exalted above the hills and all nations shall flow unto it. And many people shall go and say come ye, and let us go up to the mountain of the LORD, to the house of the GOD of Jacob; and he will teach us of his ways and we will walk in his paths; for out of Zion shall go forth the law, and the work of the LORD… O house of Jacob, come ye and let us walk in the light of the LORD.”"
    },
    {
      title:
        "The William S. Boyd School of Law and the University President, Provost and Administrative Offices, University of Nevada, Las Vegas",
      image1: Law1,
      image2: Law2,
      summary:
        "The two existing buildings in the center of the UNLV campus that currently house the university’s library are to be renovated into the new Law School and UNLV Administration offices. A complex program is to be installed in the peculiar, concrete round building and the bridge connected, highly contrasting metal rectangular building. The contrasting legal tenets being taught; defendant/plaintiff, guilt/innocence, point/counterpoint will be embodied in the juxtaposition of elements curved or round with those that are rectilinear or of the grid. Already strong in the existing contrasting buildings, this juxtaposition will now gain substance as an ordering concept expressed now also in the new elements of the renovation. This project was designed while employed by Welles-Pugsley Architects."
    },
    {
      title: "Photovoltaic Integrated Sports Visitors Center",
      image1: Sports1,
      image2: Sports2,
      summary:
        "The design of this project involves the idea that excellence in athletics involves striving toward goals, reaching those heights, then stretching toward even higher objectives. This idea is expressed though a series of ramps leading up towards successive metaphoric “athletic goals” (stylized athletic figures/sculptures). Exhibits would be located along (and in interstitial spaces around) all circulation path/ramps throughout the visitors center. A photovoltaic array is mounted to an immense wheel wrapping around the ramps. As it tracks the sun throughout the day (and night), it brings welcome shade, celebrates the technology and circumscribes the universality and wonder of sport."
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
      <div>Featured Institutional Solutions</div>

      {displayCommericalInfo}
    </div>
  );
}
