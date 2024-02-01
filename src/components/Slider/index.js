import React, {useEffect} from 'react';
import ListCard from '../List Card';
import { house } from '../../data/constant';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


const Slide = () => {
  var settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    width: '100%',
    arrows: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      '.slide', // Target element or class
      {
        opacity: 0,
        transform: 'translateY(50px)', // Optional: Set the initial transform for animation
      },
      {
        opacity: 1,
        transform: 'translateY(0)', // Optional: Set the final transform for animation
        duration: 5,
        scrollTrigger: {
          trigger: '.slide',
          start: 'top 90%', // Adjust the start position as needed
        end: 'bottom 80%',  // Adjust the end position as needed
          scrub: 1, // Adjust the scrub value for smoother animation
          toggleActions: 'play none none none', // Adjust toggle actions as needed
        },
      }
    );
  });

  return (

    
      <Slider className='slide' {...settings}>
        
        {house.map((house) => (
          <div key={house.id}> {/* Wrap each ListCard in a container div */}
            <ListCard house={house} />
          </div>
        ))}
      </Slider>
  );
};

export default Slide;