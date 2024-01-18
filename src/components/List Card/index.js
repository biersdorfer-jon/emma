import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    width: 280px;
    display: flex;
    margin: 20px;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    margin-bottom: 15px;
    border-radius: 10px 10px;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
-moz-box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
transition: all 0.5s ease;

&:hover {
    transform: translateY(-15px);
}

`;
const Bottom = styled.div`
display: flex;
flex-direction: row;
width: 100%;
padding: 3px;
justify-content: space-between;
`;

const Left = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Right = styled.div`
    width: 30%;
    display: flex;
    justify-content: end;
    
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
    font-size: 14px;
    justify-content: start;
    width: 100%;
    color: black;
    padding-top: 3px;
`;

const Logo = styled.img`
    width: 100%;
    padding-top: 5px;
    align-self: flex-start;
    
`;


const ListCard = ({house}) => {
  return (
        <Card>
            <Image src={require(`../../images/${house.image}`)} />
            <Bottom>
                <Left>
            <Price>{house.price}</Price>
            <Details>{house.details}</Details>
            <Address>{house.address}</Address>
</Left>
<Right>
<Logo src={require('../../images/kwprefer.png')} />
</Right>
</Bottom>
        </Card>
  )
}

export default ListCard