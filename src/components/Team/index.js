import React, { useEffect } from 'react'
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Container = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: white;
    padding: 40px 0px;

    `;

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 0px 50px;

    @media (max-width: 1400px) {
        padding: 20px 0px;
    }
`;
const Image = styled.img`
width: 40%;
text-decoration: none;
align-items: center;

@media (max-width: 1200px) {
    display: none;
}
`;

const TextContainer = styled.div`
    display: flex;
    width: 55%;
    height: 330px;
    justify-content: center;
    gap: 10px;
    padding: 0px 0px 0px 20px;

    @media (max-width: 1200px) {
        height: 150px;
        padding: 0px;
        padding-top: 0px;
    }

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
        padding: 0px;
        padding-top: 20px;
    }
    `;

const Title = styled.div`
    font-size: 110px;
    font-weight: 800;
    display: flex;
    align-items: center;
    color: transparent; /* Set text color to transparent */
    font-family: Poppins;
    padding-left: 10px;
    -webkit-text-stroke: 2px #B41010; /* Add stroke using -webkit-text-stroke */
    text-stroke: 2px #B41010; /* Standard syntax for text-stroke */

    @media (max-width: 1650px) {
        font-size: 90px;
    }

    @media (max-width: 1200px) {
        font-size: 110px;
    }

    @media (max-width: 920px) {
        font-size: 90px;
    }

    @media (max-width: 720px) {
        line-height: 1.3;
    }

`;

const Bold = styled.div`
font-size: 110px;
    font-weight: 900;
    display: flex;
    align-items: center;
    font-family: Inter;
    color: white;
    padding-left: 10px;
    color: #B41010;

    @media (max-width: 1650px) { 
        font-size: 90px;
    }

    @media (max-width: 1200px) {
        font-size: 110px;
    }
    @media (max-width: 920px) {
        font-size: 90px;
    }

    @media (max-width: 720px) {
        line-height: .5;
    }

`;

const Meet = styled.div`
font-size: 110px;
    font-weight: 900;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: Inter;
    color: white;
    padding-left: 0px;
    color: #B41010;

    @media (max-width: 1650px) {
        font-size: 90px;
    }

    @media (max-width: 1200px) {
        font-size: 110px;
    }
    @media (max-width: 920px) {
        font-size: 90px;
    }
    
    @media (max-width: 720px) {
        line-height: .5;
    }

`;

const Line = styled.div`

    display: none;
    width: 45%;
    justify-content: center;
    height: 150px;
    border-bottom: 2px solid #b41010;
    position: absolute;
    margin-left: 30px;


    @media (max-width: 1200px) {
        display: flex;
        width: 70%;
        margin-left: 0px;
    }
    @media (max-width: 920px) {
        height: 120px;
        width: 80%;
        margin-left: 0px;
    }

    @media (max-width: 720px) {
        display: none;
    }
    
`;


const Team = () => {

    gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      '.team', // Target element or class
      {
        opacity: 0,
        transform: 'translateY(50px)', // Optional: Set the initial transform for animation
      },
      {
        opacity: 1,
        transform: 'translateY(0)', // Optional: Set the final transform for animation
        duration: 10,
        scrollTrigger: {
          trigger: '.team',
          start: 'top 90%', // Adjust the start position as needed
          end: 'bottom 80%',  // Adjust the end position as needed
          scrub: 1, // Adjust the scrub value for smoother animation
          toggleActions: 'play none none none', // Adjust toggle actions as needed
          markers: true, // Remove this line in production
        },
      }
    );
  }, []);


  return (
    <Container className='team' id='team'>
    <Top>
        <Image src={require('../../images/hero2.jpg')}/>
        <TextContainer>
        <Meet>Meet</Meet><Title>The</Title><Bold>Team</Bold>
        </TextContainer>
    </Top>
    <Line />
    </Container>
  )
}

export default Team