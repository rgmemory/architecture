import React from "react";
import "./Reusable.css";

const Reusable = props => {
  let {
    title,
    image1,
    image2,
    image3,
    image4,
    image5,
    summary,
    quote,
    quoteAttribute
  } = props;

  return (
    <div className={"outerdiv"}>
      <div className="title">{title}</div>
      <div className={quote ? `quote` : `none`}>
        <div className="quote-margin">{quote}</div>
        <div>{quoteAttribute}</div>
      </div>
      <div>
        <img className={image1 ? `image` : `none`} src={image1}></img>
        <img className={image2 ? `image` : `none`} src={image2}></img>
        <img className={image3 ? `image` : `none`} src={image3}></img>
        <img className={image4 ? `image` : `none`} src={image4}></img>
        <img className={image5 ? `image` : `none`} src={image5}></img>
      </div>
      <div class="summary">{summary}</div>
    </div>
  );
};

export default Reusable;

