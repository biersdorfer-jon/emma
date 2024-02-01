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
    
  const animateElements = (startPoint, endPoint) => {
        
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
        start: startPoint, // Adjust the start position as needed
      end: endPoint,  // Adjust the end position as needed
        scrub: 1, // Adjust the scrub value for smoother animation
        toggleActions: 'play none none none', // Adjust toggle actions as needed
      },
    }
    );
  };

  // Media query for screens with a maximum width of 500px
  const mediaQuery500 = window.matchMedia('(max-width: 500px)');
  if (mediaQuery500.matches) {
    animateElements('top 100%', 'top 70%');
  }

  // Media query for screens with a minimum width of 501px
  const mediaQuery501 = window.matchMedia('(min-width: 501px)');
  if (mediaQuery501.matches) {
    animateElements('top 90%', 'bottom 80%');
  }

  // Event listener for changes in media query status
  const handleMediaQueryChange = (event) => {
    if (event.matches) {
      // Media query matches, apply animations
      animateElements('top 100%', 'top 70%');
    } else {
      animateElements('top 90%', 'bottom 100%');
    }
  };

  // Add event listener for media query changes
  mediaQuery500.addListener(handleMediaQueryChange);
  mediaQuery501.addListener(handleMediaQueryChange);

  // Clean up event listeners on component unmount
  return () => {
    mediaQuery500.removeListener(handleMediaQueryChange);
    mediaQuery501.removeListener(handleMediaQueryChange);
  };
}, []);

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