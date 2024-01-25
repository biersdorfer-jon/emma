import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
    width: 100%;
    display: flex;
    background: white;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 100px 0px;

    @media (max-width: 1250px) {
        justify-content: center;
        padding: 0px 100px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    width: 55%;
    justify-content: center;
    gap: 10px;
    padding: 50px 20px;
    @media (max-width: 900px) {
        flex-direction: column;
    }
    `;

const Title = styled.div`
    font-size: 90px;
    font-weight: 800;
    display: flex;
    align-items: center;
    color: transparent; /* Set text color to transparent */
    font-family: Poppins;
    padding-left: 10px;
    -webkit-text-stroke: 2px #B41010; /* Add stroke using -webkit-text-stroke */
    text-stroke: 2px #B41010; /* Standard syntax for text-stroke */

    @media (max-width: 900px) {
        justify-content: center;
        line-height: 0.9;
        }

    `;

const Bold = styled.div`
font-size: 90px;
    font-weight: 900;
    display: flex;
    align-items: center;
    font-family: Inter;
    color: white;
    padding-left: 10px;
    color: #B41010;

    @media (max-width: 900px) {
        justify-content: center;
        line-height: 0.8;
        }
`;

const Meet = styled.div`
font-size: 90px;
    font-weight: 900;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: Inter;
    color: white;
    padding-left: 0px;
    color: #B41010;

    @media (max-width: 900px) {
        justify-content: center;
        line-height: 0.8;
    }


`;

const Line = styled.div`

    display: flex;
    width: 45%;
    justify-content: center;
    height: 150px;
    border-bottom: 2px solid #b41010;
    position: absolute;
    margin-left: 30px;

    @media (max-width: 900px) {
        height: 310px;
        width: 60%;
        margin-left: 0px;
    }
    
`;


const ListHeader = () => {
  return (
    <Container id='list'>
        <TextContainer>
            <Meet>Our</Meet>
            <Title>TOP</Title>
            <Bold>Listings</Bold>
        </TextContainer>
        <Line></Line>
        
    </Container>
  )
}

export default ListHeader