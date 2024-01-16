import React from 'react'
import styled from 'styled-components';

var Carousel = require('react-responsive-carousel').Carousel;


const Conatiner = styled.div`
    width: 100%;
    display: flex;
    height: 100px;
    background: white;
    justify-content: center;
    padding-top: 50px;
`;

const Card = styled.div`
    width: 425px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 350px;
    //border: 1px solid black;
    border-radius: 6px 6px;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
-moz-box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
`;
const Bottom = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;

const Left = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`;

const Right = styled.div`
    width: 30%;
    display: flex;
    
`;

const Image = styled.img`
    width: 100%;
    border-radius: 10px 10px 0px 0px;
-webkit-border-radius: 10px 10px 0px 0px;
-moz-border-radius: 10px 10px 0px 0px;
`;

const Price = styled.div`
    font-weight: 700;
    font-size: 25px;
    justify-content: start;
    width: 100%;
    color: black;
    padding-top: 4px;
`;

const Details = styled.div`
    font-weight: 500;
    font-size: 18px;
    justify-content: start;
    width: 100%;
    color: black;
    padding-top: 4px;
`;

const Address = styled.div`
    font-weight: 400;
    font-size: 16px;
    justify-content: start;
    width: 100%;
    color: black;
    padding-top: 3px;
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    padding-top: 5px;
    align-self: flex-end;
`;


const List = () => {
  return (
    <Conatiner>
        <Card>
            <Image src={require('../../images/house1.jpg')} />
            <Bottom>
                <Left>
            <Price>$325,000</Price>
            <Details>6 bds | 6 ba | 2,932 sqft </Details>
            <Address>13971 S 94th Ave E, Bixby, OK 74008
</Address>
</Left>
<Right>
<Logo src={require('../../images/kwprefer.png')} />
</Right>
</Bottom>
        </Card>
    </Conatiner>
  )
}

export default List