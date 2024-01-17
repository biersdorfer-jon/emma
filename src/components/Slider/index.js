import React from 'react';
import ListCard from '../List Card';
import { house } from '../../data/constant';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";




const Slide = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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