import React, { useEffect } from 'react';
import styled from 'styled-components';
import Monitor from '../Icons/monitor';
import Home from '../Icons/home';
import Users from '../Icons/users';
import Heart from '../Icons/heart';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-top: 40px;
    

    @media (max-width: 1552px) {
        padding: 40px 200px 0px 200px;  /* Include all padding values */
    }

    @media (max-width: 1275px) {
        padding: 40px;
    }
`;


const Top = styled.div`
    font-size: 55px;
    color: #B41010;
    font-weight: 800;
    text-align: center


`;

const Sub = styled.div`
    color: black;
    font-size: 20px;
    width: 60%;
    text-align: center;
    padding: 20px 0px 10px;

    @media (max-width: 700px) {
        width: 90%; 
        font-size: 18px;
    }

    @media (max-width: 460px) {
        width: 100%;  
    }
`;

const SkillContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background: white;
    gap: 50px;
    padding-top: 50px;
    
    `;


const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const IconContainer = styled.div`
    background: #FF9898;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0px;
    margin-bottom: 10px;

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
    }
`;

const Title = styled.div`
    color: #B41010;
    font-size: 24px;    
    font-weight: 700;
    text-align: center;
    padding: 6px 0px;
`;

const Desc = styled.div`
    text-align: center;
    font-size: 16px;
    width: 350px;
    height: 150px;

    @media (max-width: 1500px) {
        width: 400px;   
    }


    @media (max-width: 460px) {
        width: 300px;  
    }

    @media (max-width: 330px) {
        width: 270px; 
    }


    
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 20px;
    @media (max-width: 929px) {
        display: none;
    }

`;
    
const Award = styled.img`
    width: 35%;
`;

const Sub2 = styled.div`
    color: black;
    display: flex;
    font-size: 18px;
    width: 50%;
    text-align: center;
    padding: 10px 0px;

    @media (max-width: 929px) {
        display: none;
    }

`;

const About = () => {

    gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const animateElements = (startPoint, endPoint) => {
      
      gsap.fromTo(
        '.top',
        {
          opacity: 0,
          transform: 'translateY(50px)',
        },
        {
          opacity: 1,
          transform: 'translateY(0)',
          duration: 4,
          scrollTrigger: {
            trigger: '.top',
            start: startPoint,
            end: endPoint,
            scrub: 1,
            toggleActions: 'play none none none', 
          },
        } 
      );


    gsap.fromTo(
        '.skill1',
        {
          opacity: 0,
          transform: 'translateY(50px)',
        },
        {
          opacity: 1,
          transform: 'translateY(0)',
          duration: 1.5,
          scrollTrigger: {
            trigger: '.skill1',
            start: startPoint,
            end: endPoint,
            scrub: 1,
            toggleActions: 'play none none none', 
          },
        } 
      );

      gsap.fromTo(
        '.skill2',
        {
          opacity: 0,
          transform: 'translateY(50px)',
        },
        {
          opacity: 1,
          transform: 'translateY(0)',
          duration: 1.5,
          scrollTrigger: {
            trigger: '.skill2',
            start: startPoint,
            end: endPoint,
            scrub: 1,
            toggleActions: 'play none none none', 
          },
        } 
      );

      gsap.fromTo(
        '.skill3',
        {
          opacity: 0,
          transform: 'translateY(50px)',
        },
        {
          opacity: 1,
          transform: 'translateY(0)',
          duration: 1.5,
          scrollTrigger: {
            trigger: '.skill3',
            start: startPoint,
            end: endPoint,
            scrub: 1,
            toggleActions: 'play none none none', 
          },
        } 
      );

      gsap.fromTo(
        '.skill4',
        {
          opacity: 0,
          transform: 'translateY(50px)',
        },
        {
          opacity: 1,
          transform: 'translateY(0px)',
          duration: 1.5,
          scrollTrigger: {
            trigger: '.skill4',
            start: startPoint,
            end: endPoint,
            scrub: 1,
            toggleActions: 'play none none none', 
          },
        } 
      );
    };

    // Media query for screens with a maximum width of 1552px
    const mediaQuery1552 = window.matchMedia('(max-width: 1552px)');
    if (mediaQuery1552.matches) {
      animateElements('top 100%', 'top 60%');
    }

    // Media query for screens with a minimum width of 1553px
    const mediaQuery1553 = window.matchMedia('(min-width: 1553px)');
    if (mediaQuery1553.matches) {
      animateElements('top 90%', 'bottom 100%');
    }

    // Event listener for changes in media query status
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        // Media query matches, apply animations
        animateElements('top 100%', 'top 60%');
      } else {
        animateElements('top 90%', 'bottom 100%');
      }
    };

    // Add event listener for media query changes
    mediaQuery1552.addListener(handleMediaQueryChange);
    mediaQuery1553.addListener(handleMediaQueryChange);

    // Clean up event listeners on component unmount
    return () => {
      mediaQuery1552.removeListener(handleMediaQueryChange);
      mediaQuery1553.removeListener(handleMediaQueryChange);
    };
  }, []);

  
       
  return (
    <Container id='about'>
        
    <Top className='top'>65+ Years of Experience</Top>
    
    <Sub className='top'>Our team's extensive experience has been built on a foundation of unparalleled customer care. We are committed to providing you with a personalized, stress-free, and seamless real estate experience.</Sub>
    <ImageContainer className='top'>
        <Award src={require('../../images/realProdRed.png')}/>
    </ImageContainer>
    <Sub2 className='top'>For the year of 2024, this team have earned their way to becoming one of the top 500 real estate agents in the Tulsa Metro through their MLS residential production in Tulsa County and the counties touching Tulsa County. </Sub2>
    

    <SkillContainer>
    <div className='skill1'>
        <Skill>
        <IconContainer>
            <Home />
        </IconContainer>
            <Title>Market Mastery</Title>
            <Desc>Our deep knowledge of the real estate industry, market trends, and negotiation skills ensures that you receive the best possible results. We are masters of our craft, dedicated to maximizing the value of your investments.</Desc>
        </Skill>
        </div>
        <div className='skill2'>
        <Skill>
            <IconContainer><Monitor /></IconContainer>
            <Title>Innovative Technology</Title>
            <Desc>In the ever-evolving world of real estate, we stay at the forefront of technology trends. From advanced marketing strategies to cutting-edge tools, we leverage the latest innovations to benefit you.</Desc>
        </Skill>
        </div>
        <div className='skill3'>
        <Skill>
            <IconContainer><Users /></IconContainer>
            <Title>Local Expertise</Title>
            <Desc>As longtime residents of this community, we possess an intimate understanding of the local market. We know the neighborhoods, schools, and amenities like the back of our hands, enabling us to find your dream property or market your home effectively.</Desc>
        </Skill>
        </div>
        <div className='skill4'>
        <Skill>
            <IconContainer><Heart /></IconContainer>
            <Title>Relentless Passion</Title>
            <Desc>Real estate isn't just our profession; it's our passion. We approach each transaction with enthusiasm, dedication, and a genuine love for what we do. Your goals are our goals, and we are committed to helping you achieve them.</Desc>
        </Skill>
        </div>
    </SkillContainer>
    </Container>
  )
}

export default About