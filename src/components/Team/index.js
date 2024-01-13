import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #B41010;
    padding: 40px 0px;
    `;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    gap: 50px;
    padding: 0px 100px;
`;
const Image = styled.img`
width: 60%;
text-decoration: none;
align-items: center;
`;

const Title = styled.div`
    font-size: 90px;
    font-weight: 800;
    display: flex;
    width: 30%;
    color: white;
    text-align: right;

`;

const Team = () => {
  return (
    <Container>
    <Top>
        <Image src={require('../../images/hero2.jpg')}/>
        <Title>Meet the Team</Title>
    </Top>
    </Container>
  )
}

export default Team