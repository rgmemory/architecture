import React, { useState } from "react";
import Reusable from "../Reusable/Reusable";

import Custom1 from "./Custom1.jpg";
import Custom2 from "./Custom2.jpg";
import Custom3 from "./Custom3.jpg";
import Custom4 from "./Custom4.jpg";
import Custom5 from "./Custom5.jpg";
import Custom6 from "./Custom6.jpg";
import Custom7 from "./Custom7.jpg";
import Renovation1 from "./Renovation1.jpg";
import Renovation2 from "./Renovation2.jpg";
import Renovation3 from "./Renovation3.jpg";

export default function Commerical() {
  const [commericalInfo] = useState([
    {
      quote: `Your design for our home has achieved what other architects said could
    not be done. We have lost count of the number of people – friends,
    acquaintances and many total strangers – who have complimented us on the
    design of our house and expressed admiration for the architect. We could
    not be more delighted with our “new” home. Thank-you for turning our
    vague wishes into an exciting reality.`,
      quoteAttribute: `Carole and Michael Blackwell, Home-owners`
    },

    {
      title: "Custom Home",
      image1: Custom1,
      image2: Custom2,
      summary:
        "With the main living level raised half a story above the site over the earth integrated bedroom level, this house for a busy family becomes a dias for viewing the back yard and cul-de-sac activities as well as the city lights and angular desert mountains beyond. The house is organized around a south faced axial “V” that forms the active entry, dining, family and circulation spaces. A narrow strip of skylight runs the length from the glass front to the glass rear of this high ceilinged hall. Several schemes and a study model were created in the creative process."
    },

    {
      title: "Home Addition and Renovation",
      image1: Renovation1,
      image2: Renovation2,
      image3: Renovation3
    },
    {
      title: "Custom Home",
      image1: Custom3,
      image2: Custom4,
      image3: Custom5,
      image4: Custom6,
      image5: Custom7,
      summary:
        "It is interesting that all the conceptual design options we generated for this custom home are very different, but all the floor plans (spacial relationships) are basically the same… for example, all the schemes have the entry into the great room in the center; the family room/kitchen/garages are to one side; the den/bedrooms are to the other. After the client selected one of the schemes, a study model was made to further develop and analyze the design."
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
        image4={current.image4}
        image5={current.image5}
        summary={current.summary}
      />
    );
  });
  return (
    <div>
      <div>Featured Residential Solutions</div>

      {displayCommericalInfo}
    </div>
  );
}
