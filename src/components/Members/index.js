import React from 'react'
import styled from 'styled-components';
import { useEffect, useState } from "react";
import Tel from '../Icons/phone';
import Mail from '../Icons/mail';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding: 100px 0px;
    background: transparent;
    position: relative; /* Add position: relative to the container */
    z-index: 1;`;

const CardConatiner = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    align-items: center;
    gap: 50px;
    
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 300px;
    height: 300px;
    justify-content: center;
    border: 1px solid #B41010;
    border-radius: 12px 12px;
    background: white;
    z-index: 3;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;

const Image = styled.img`
    width: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;  /* Add this line to center the image */
    border: 1px solid #B41010;
`;

const Title = styled.div`
    color: #B41010;
    font-size: 24px;
    text-align: center;
    font-weight: 800;
    padding-top: 10px;
`;

const Phone = styled.div`

color: black;
font-size: 20px;
text-align: start;

`;

const Email = styled.div`

color: black;
font-size: 20px;
text-align: center;
`;

const Job = styled.div`
color: black;
font-size: 20px;
text-align: center;
font-weight: 600;
`;

const ButtonContainer = styled.div`
padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;

`;

const Button = styled.a`
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
        background-color: transparent;
        border: 1px solid #B41010;
        color: #B41010;    
    }
    `;

    const ContactInfo = styled.div`
    position: absolute;
    //transform: translateY(-50%);
    background: white;
    width: 260px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    
    align-items: center;
    border: 1px solid #B41010;
    border-radius: 12px 12px;
    transition: transform 0.3s ease, width 0.3s ease;
`;

const ContactLeft = styled(ContactInfo)`
left: calc(50% - 300px);
width: ${props => (props.expanded ? '400px' : '260px')};
padding-right: 20px;
`;

const ContactRight = styled(ContactInfo)`
right: calc(50% - 300px);
width: ${props => (props.expanded ? '400px' : '260px')};
padding-left: 20px;
`;

const ContactTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 100%;
    gap: 10px;
`;

const ContactBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 100%;
    gap: 10px;
`;

const PhoneSection = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    align-items: start; /* Align items to the start */
`;

const IconContainer = styled.div`
    background: #FF9898;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.4s ease-in-out;

    &:hover{
        transform: scale(1.1);
        
    }
`;

const Members = () => {
    const [showLeftContact, setShowLeftContact] = useState(false);
    const [showRightContact, setShowRightContact] = useState(false);

    const toggleLeftContact = () => {
        setShowLeftContact(!showLeftContact);
        setShowRightContact(false);
    };

    const toggleRightContact = () => {
        setShowRightContact(!showRightContact);
        setShowLeftContact(false);
    };

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '500px',
          backgroundImage: `url(${require('../../images/Kw.jpg')})`,
          filter: 'brightness(0.5)',
        }}
      ></div>
    <Container>
        <CardConatiner>
            <Card>
                <Image src={require('../../images/todd - Copy.png')} />
                <Title>Todd McCoy</Title>
                <Job>Real Estate Agent</Job>
                {/* <Phone>919191922121</Phone>
                <Email>tmccoy@kw.com</Email> */}
                <ButtonContainer>
                    <Button onClick={toggleLeftContact}>Show Contacts</Button>
                </ButtonContainer>
            </Card>
            <Card>
                <Image src={require('../../images/emma - Copy.png')} />
                <Title>Emma Biersdorfer</Title>
                <Job>Real Estate Agent</Job>
                <ButtonContainer>
                    <Button onClick={toggleRightContact}>Show Contacts</Button>
                </ButtonContainer>
            </Card>
            <ContactLeft
                    expanded={showLeftContact}
                    style={{ transform: showLeftContact ? 'translateX(-400px)' : 'translateX(0)' }}
                >
                <ContactTop>   
                <IconContainer>
                    <Tel />
                </IconContainer>
                <PhoneSection>
                <Phone>Mobile: (918) 519-1878</Phone>
                <Phone>Office: (918) 251-2252</Phone>
                </PhoneSection>
                </ ContactTop>
                <ContactBottom>
                <IconContainer>
                    <Mail />
                </IconContainer>
                <PhoneSection>
                <Email>tmccoy@kw.com</Email>
                </PhoneSection>
                </ContactBottom>
                </ContactLeft>
                <ContactRight
                    expanded={showRightContact}
                    style={{ transform: showRightContact ? 'translateX(400px)' : 'translateX(0)' }}
                >     
                <ContactTop>   
                <IconContainer>
                    <Tel />
                </IconContainer>
                <PhoneSection>
                <Phone>Mobile: (720) 490-3418</Phone>
                <Phone>Office: (918) 251-2252</Phone>
                </PhoneSection>
                </ ContactTop>
                <ContactBottom>
                <IconContainer>
                    <Mail />
                </IconContainer>
                <PhoneSection>
                <Email>ebiersdorfer@kw.com</Email>
                </PhoneSection>
                </ContactBottom>
            </ContactRight>
            </CardConatiner>
    </Container>
    </div>
  )
}

export default Members 