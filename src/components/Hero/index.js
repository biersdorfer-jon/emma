import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
    align-items: start;
    justify-content: start;
    padding: 400px 0px 50px 11%;
    position: static;
    z-index: 1; /* Set z-index to make sure MemoContainer is above the overlay */


    @media (max-width: 768px) {
      align-items: center;
      padding: 350px 0px 50px 0px;
    }

    @media (max-width: 400px) {
      align-items: center;
      padding: 230px 0px 50px 0px;
    }
    
`;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  
  
  position: relative; /* Add position relative to MemoContainer */

  @media (max-width: 768px) {
    align-items: center;
  }
    `;

const Memo = styled.h1`
  color: white;
  display: flex;
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 570px) {
    font-size: 30px;
  }

  @media (max-width: 370px) {
    font-size: 25px;
  }

`;

const Memo2 = styled.h1`
  color: white;
  display: flex;
  font-size: 72px;
  line-height: .8; /* Adjust the line height to your preference */

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 570px) {
    font-size: 40px;
  }

  @media (max-width: 370px) {
    font-size: 30px;
  }

`;

const Memo3 = styled.h1`
  color: white;
  display: flex;
  font-size: 50px;
  line-height: 1.6; /* Adjust the line height to your preference */

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 570px) {
    font-size: 30px;
  }

  @media (max-width: 370px) {
    font-size: 25px;
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;
    z-index: 2;
    margin-top: 30px;

    @media (max-width: 768px) {
      justify-content: center;
    }
`;

const Button = styled.a`
    padding: 5px 25px;
    width: 150px;
    height: 50px;
    background-color: #B41010;
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px 6px;
    font-size: 15px;

    &:hover {
        background-color: white;
        border: 1px solid #B41010;
        color: #B41010;    
    }

`;

const Hero = () => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  })
  const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

// Dynamically set the height of the image based on screen width
const setHeight = () => {
  const imageContainer = document.getElementById('home'); // Adjust the ID based on your container ID
  if (imageContainer) {
    const screenWidth = window.innerWidth;
    const imageHeight = screenWidth <= 400 ? 600 : 800; // Adjust the height values as needed
    imageContainer.style.height = `${imageHeight}px`;
  }
};

setHeight(); // Set initial height
window.addEventListener('resize', setHeight); 

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '1920/856',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${require('../../images/hero.jpg')})`,
          filter: 'brightness(0.5)',
        }}
      ></div>
        <Container className='show' id='home'>
      <MemoContainer>
        <Memo>Need to </Memo>
        <Memo2>Buy, Sell, or Invest</Memo2>
        <Memo3>in Real Estate?</Memo3>
      </MemoContainer>
        <ButtonContainer>
            <Button href='#contact'>Contact Us</Button>
        </ButtonContainer>
      </Container>
    </div>
  );
};

export default Hero;
