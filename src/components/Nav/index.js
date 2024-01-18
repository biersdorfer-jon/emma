import React from 'react';
import styled from 'styled-components';
import { GoArrowRight } from "react-icons/go";


const Container =  styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    // position: fixed;
    z-index: 10;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 0 120px;
    border-bottom: 2px solid  #b41010

`;
const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
height: 100%;
padding: 0 6px;
`;

const Logo = styled.img`
width: 160px;
aspect-ratio: 16/9;
display: flex;
cursor: pointer;
text-decoration: none;
align-items: center;
`;

const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px 10%;

`;

const Tags = styled.a`
    color: #000;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
    text-decoration: none;

    &:hover {
        color: #B41010;
        transform: scale(1.05);
    }

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;

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
    justify-content: space-between;
    border-radius: 6px 6px;
    font-size: 15px;

    &:hover {
        background-color: transparent;
        border: 1px solid #B41010;
        color: #B41010;    
    }

`;





const Nav = () => {
  return (
    <Container>
    <LogoContainer>
        <Logo src={require('../../images/logoBlack.png')}/>
    </LogoContainer>
        <NavItems>
            <Tags href='#home'>Home</Tags>
            <Tags href='#about'>About</Tags>
            <Tags href='#team'>Meet the Team</Tags>
            <Tags href='#list'>Top Listings</Tags>
        </NavItems>
        <ButtonContainer>
            <Button href='#contact'>Contact Us <GoArrowRight/></Button>
        </ButtonContainer>
    </Container>
  )
}

export default Nav