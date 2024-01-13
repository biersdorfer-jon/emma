import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 800px;
    align-items: start;
    justify-content: start;
    padding: 400px 100px 50px 200px;
    position: static;
    z-index: 1; /* Set z-index to make sure MemoContainer is above the overlay */

`;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  
  position: relative; /* Add position relative to MemoContainer */
`;

const Memo = styled.h1`
  color: white;
  display: flex;
  font-size: 50px;

`;

const Memo2 = styled.h1`
  color: white;
  display: flex;
  font-size: 72px;
  line-height: .8; /* Adjust the line height to your preference */

`;

const Memo3 = styled.h1`
  color: white;
  display: flex;
  font-size: 50px;
  line-height: 1.6; /* Adjust the line height to your preference */

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;
    z-index: 2;
    margin-top: 30px
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
        <Container className='show'>
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
