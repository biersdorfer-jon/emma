import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
width: 100%;
display: flex;
background: #f2f2f2;
align-items: center;
color: white;
justify-content: center;
flex-direction: column;
margin-top: 30px;
padding-top: 30px;
padding-bottom: 20px;


@media (max-width: 700px) {
  margin-top: 0px;
}

`;

const TopLogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
padding: 0 6px;
margin-bottom: 15px;

@media (max-width: 1450px) {
    width: 40%;
}

@media (max-width: 1000px) {
    width: 30%;
}


`;

const BottomLogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
padding: 15px 6px;
margin-bottom: 15px;

@media (max-width: 1450px) {
    width: 40%;
}

@media (max-width: 1000px) {
    width: 30%;
}


`;

const Logo = styled.img`
width: 220px;
display: flex;
cursor: pointer;
text-decoration: none;
align-items: center;
`;

const BotLogo = styled.img`
width: 160px;
display: flex;
cursor: pointer;
text-decoration: none;
align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;

`;

const Panel = styled.div`
padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;

  

  @media (max-width: 1343px) {
    width: 500px;
    padding-top: 10px;
    padding-left: 200px;
  }

  @media (max-width: 1150px) {
    width: 350px;
    padding-left: 100px;
  }

  @media (max-width: 780px) {
    width: 300px;
    padding-left: 75px;
  }

  
  @media (max-width: 670px) {
      align-items: center;
      padding-left: 0px;
  }
`;

const Header = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 6px;
`;

const Tag = styled.a`
  color: black;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 3px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  width: 85%;
  margin-bottom: 2px;
`;

const Address = styled.div`
  color: black;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  width: 85%;
  margin-bottom: 6px;

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    padding: 20px 0px 20px;

    @media (max-width: 768px) {
      justify-content: center;
    }
`;

const Button = styled.a`
    padding: 5px 25px;
    width: 220px;
    height: 60px;
    background-color: #B41010;
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px 6px;
    font-size: 18px;

    &:hover {
        background-color: #f0f0f0;
        border: 1px solid #B41010;
        color: #B41010;    
    }

`;




const Footer = () => {
  return (
    <Container>
      <TopLogoContainer>
        <Logo src={require('../../images/logoBlack.png')} />
      </TopLogoContainer>

      <FooterContent>
        <Panel>
          <Header>kw.com</Header>
          <Tag href='https://sneakpreview.kw.com/search/sale' target='_blank'>Property Search</Tag>
          <Tag href='https://www.kw.com/agents' target='_blank'>KW® Agent Search</Tag>
          <Tag href='https://locations.kw.com/' target='_blank'>Find a local KW® Office</Tag>
          <Tag href='https://www.kw.com/blog' target='_blank'>Blog</Tag>
        </Panel>
        <Panel>
          <Header>Services</Header>
          <Tag href='https://kellercovered.com/' target='_blank'>Keller Covered</Tag>
          <Tag href='https://kwlends.com/' target='_blank'>Keller Home Loans</Tag>
        </Panel>
        <Panel>
          <Header>Search</Header>
          <Tag href='https://www.kw.com/download' target='_blank'>Download the App</Tag>
          <Tag href='https://kwcommercial.com/' target='_blank'>Commercial</Tag>
          <Tag href='https://kwland.com/' target='_blank'>Land</Tag>
          <Tag href='https://luxury.kw.com/' target='_blank'>Luxury</Tag>
        </Panel>
        <Panel>
          <Header>KW® Agents</Header>
          <Tag href='https://thrive.kw.com/?utm_source=KW_Footer&utm_medium=referral&utm_campaign=Agent_Count&utm_content=Recruiting_Page' target='_blank'>Join KW®</Tag>
          <Tag href='https://events.kw.com/' target='_blank'>Events</Tag>
          <Tag href='https://www.kwcares.org/' target='_blank'>KW Cares®</Tag>
          <Tag href='https://www.kwkc.org/' target='_blank'>KWKC</Tag>
          <Tag href='https://outfront.kw.com/' target='_blank'>Stories</Tag>
          <Tag href='https://kwredlabel.com/' target='_blank'>Shop</Tag>
        </Panel>
      </FooterContent>
      <ButtonContainer>
            <Button href='#contact'>Contact Us</Button>
        </ButtonContainer>
        <Address>Office: (918) 251-2252</Address>
        <Address>2438 W New Orleans St</Address>
        <Address>Broken Arrow, OK 74011</Address>
      <BottomLogoContainer>
        <BotLogo src={require('../../images/kwprefer.png')} />
      </BottomLogoContainer>
      <Copyright>Keller Williams Realty, Inc., a franchise company, is an Equal Opportunity Employer and supports the Fair Housing Act.</Copyright>
      <Copyright>Each Keller Williams® office is independently owned and operated.</Copyright>
      <Copyright>Copyright © 1996-2024 Keller Williams® Realty, Inc.</Copyright>
    </Container>
  )
}

export default Footer