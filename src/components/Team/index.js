import React from 'react'
import styled from 'styled-components';

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
`;
const Image = styled.img`
width: 40%;
text-decoration: none;
align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    width: 55%;
    height: 330px;
    justify-content: center;
    gap: 10px;
    padding: 0px 20px;
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


`;



const Team = () => {
  return (
    <Container id='team'>
    <Top>
        <Image src={require('../../images/hero2.jpg')}/>
        <TextContainer>
        <Meet>Meet</Meet><Title>The</Title><Bold>Team</Bold>
        </TextContainer>
    </Top>
    </Container>
  )
}

export default Team