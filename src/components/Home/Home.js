import React, { Component } from "react";
import homeImage from "../../Images/sliderImage.jpg";
import featuredResidential from "../../Images/featuredResidential.jpg";
import featuredCommercial from "../../Images/featuredCommercial.jpg";
import featuredInstitutional from "../../Images/featuredInstitutional.jpg";
import { Link } from "react-router-dom";
// import { render } from "@testing-library/react";

import "../../App.css";

export default class Home extends Component {
  state = {
    pictures: [
      {
        link: "/commercial",
        image: featuredInstitutional,
        tag: "Featured Institutional Solutions"
      },
      {
        link: "/institutional",
        image: featuredCommercial,
        tag: "Featured Commercial Solutions"
      },
      {
        link: "/residential",
        image: featuredResidential,
        tag: "Featured Residential Solutions"
      }
    ]
  };

  render() {
    let formatPictures = this.state.pictures.map(current => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Link to={current.link}>
            <img
              src={current.image}
              style={{
                maxWidth: "250px",
                maxHeight: "300px",
                minWidth: "270px",
                minHeight: "202px"
              }}
            ></img>
          </Link>
          <div
            style={{
              color: "gray",
              margin: "auto",
              fontFamily: "arial, verdana, georgia",
              fontSize: 15,
              marginTop: 10
            }}
          >
            {current.tag}
          </div>
        </div>
      );
    });

    return (
      <div>
        <img
          src={homeImage}
          style={{ borderBottom: "solid lightgray 1px", paddingBottom: "10px" }}
        ></img>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px"
          }}
        >
          {formatPictures}
        </div>
      </div>
    );
  }
}
