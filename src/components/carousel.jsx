import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "./card";

export function CenterMode({cards}) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
        <Slider {...settings}>
        {cards.map((card => (
            <Card key={card.id.toString()} item={card}/>
        )))}
      </Slider>
    </div>
  );
}

export default CenterMode;