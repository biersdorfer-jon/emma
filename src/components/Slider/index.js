import React from 'react';
import ListCard from '../List Card';
import { house } from '../../data/constant';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";


const Slide = () => {
  var settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    width: '100%',
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
      <Slider {...settings}>
        
        {house.map((house) => (
          <div key={house.id}> {/* Wrap each ListCard in a container div */}
            <ListCard house={house} />
          </div>
        ))}
      </Slider>
  );
};

export default Slide;