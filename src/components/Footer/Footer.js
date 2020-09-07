import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  state = {
    content: [
      {
        title: "Architectural Solution",
        content1: "Eric W Christensen, Architect",
        content2: "7009 Alamosa Way",
        content3: "Las Vegas, NV 89128"
      },
      {
        title: "702.339.3019",
        content1: "info@architecturalsolution.com",
        content2: "EricWChristensen@gmail.com"
      },
      {
        title: "Social Media - Coming Soon!"
      }
    ]
  };
  render() {
    let formatDisplay = this.state.content.map(current => {
      return (
        <div style={{ color: "gray", fontSize: 15 }}>
          <strong>{current.title}</strong>
          <div>{current.content1}</div>
          <div>{current.content2}</div>
          <div>{current.content3}</div>
        </div>
      );
    });
    return (
      <div className="footer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {formatDisplay}
        </div>
      </div>
    );
  }
}
