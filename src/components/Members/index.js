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
    flex-direction: column;
    position: relative; /* Add position: relative to the container */
    z-index: 1;`;

const CardConatiner = styled.div`
    display: flex;
    justify-content: center;
    width: 750px;
    align-items: center;
    gap: 50px;
    flex-direction: row;

    @media (max-width: 1450px) {
        flex-direction: column;
    }
    
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

const Phone = styled.a`

color: black;
font-size: 20px;
text-align: start;
text-decoration: none;
transition: all 0.3s ease;

&:hover{
    font-weight: 600;
}

`;

const Email = styled.a`

color: black;
font-size: 20px;
text-align: center;
text-decoration: none;
transition: all 0.3s ease;

&:hover{
    font-weight: 600;
    
}
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
    background: white;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    opacity: 1;
    align-items: center;
    border: 1px solid #B41010;
    border-radius: 12px 12px;
    transition: transform 0.3s ease, width 0.3s ease, opacity 0.4s ease, z-index 0.3s ease; /* Add opacity transition */

    @media (max-width: 1450px) {
        gap: 10px;
        height: 220px;
        border: none;

    }
`;

const ContactLeft = styled(ContactInfo)`
    left: calc(50% - 300px);
    width: ${props => (props.expanded ? '400px' : '260px')};
    opacity: ${props => (props.visibility ? '1' : '0')}; /* Use props.visibility here */\
    transform: ${props => (props.move ? 'translateX(-400px)' : 'translateX(0)')};
    padding-right: 20px;
    


    @media (max-width: 1450px) {
        top: calc(12%);
        width: ${props => (props.expanded ? '290px' : '250px')};
        transform: ${props => (props.move ? 'translateY(0px)' : 'translateY(0)')};
        z-index: ${props => (props.level ? '9' : '0')};
        left: calc(50% - 145px);
        padding-right: 0px;
        background-color: rgba(255, 255, 255, 0.6); /* Transparent white background */
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
    }

`;

const ContactRight = styled(ContactInfo)`
    right: calc(50% - 300px);
    
    width: ${props => (props.expanded ? '400px' : '260px')};
    opacity: ${props => (props.visibility ? '1' : '0')}; /* Use props.visibility here */
    transform: ${props => (props.move ? 'translateX(400px)' : 'translateX(0)')};
    padding-left: 20px;


    @media (max-width: 1450px) {
        top: calc(53%);
        width: ${props => (props.expanded ? '290px' : '250px')};
        transform: ${props => (props.move ? 'translateY(0px)' : 'translateY(0)')};
        z-index: ${props => (props.level ? '9' : '0')};
        right: calc(50% - 145px);
        padding-left: 0px;
        background-color: rgba(255, 255, 255, 0.7); /* Transparent white background */
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
    }
`;


const ContactTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //background: white;
    width: 100%;
    gap: 10px;

    @media (max-width: 1450px) {
        flex-direction: column;
    }
`;

const ContactBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //background: white;
    width: 100%;
    gap: 10px;

    @media (max-width: 1450px) {
        flex-direction: column;
    }
`;

const PhoneSection = styled.div`
    display: flex;
    flex-direction: column;
    //background: white;
    align-items: start; /* Align items to the start */

    @media (max-width: 1450px) {
        align-items: center;
    }
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


const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background-image: url(${require('../../images/Kw.jpg')});
  background-size: contain;
  background-position: center;
  filter: brightness(0.5);

  @media (max-width: 1450px) {
    height: 850px;
    background-size: fit;
  }
`;

const Members = () => {
    const [showLeftContact, setShowLeftContact] = useState(false);
    const [showRightContact, setShowRightContact] = useState(false);

    const toggleLeftContact = () => {
        setShowLeftContact(!showLeftContact);
        //setShowRightContact(false);
    };

    const toggleRightContact = () => {
        setShowRightContact(!showRightContact);
       // setShowLeftContact(true);
    };

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '',
        position: 'relative',
      }}
    >
     <BackgroundImage />

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
                    visibility={showLeftContact}
                    expanded={showLeftContact}
                    move = {showLeftContact}
                    level = {showLeftContact}
                >
                <ContactTop>   
                <IconContainer> 
                    <Tel />
                </IconContainer>
                <PhoneSection>
                <Phone href="tel:+19185191878">Mobile: (918) 519-1878</Phone>
                <Phone href="tel:+19182512252">Office: (918) 251-2252</Phone>
                </PhoneSection>
                </ ContactTop>
                <ContactBottom>
                <IconContainer>
                    <Mail />
                </IconContainer>
                <PhoneSection>
                <Email href="mailto:tmccoy@kw.com">tmccoy@kw.com</Email>
                </PhoneSection>
                </ContactBottom>
                </ContactLeft>
                <ContactRight
                    visibility={showRightContact}
                    expanded={showRightContact}
                    move = {showRightContact}
                    level = {showRightContact}
                >     
                <ContactTop>   
                <IconContainer>
                    <Tel />
                </IconContainer>
                <PhoneSection>
                <Phone href="+17204903418">Mobile: (720) 490-3418</Phone>
                <Phone href="+19182512252">Office: (918) 251-2252</Phone>
                </PhoneSection>
                </ ContactTop>
                <ContactBottom>
                <IconContainer>
                    <Mail />
                </IconContainer>
                <PhoneSection>
                <Email href="mailto:ebiersdorfer@kw.com">ebiersdorfer@kw.com</Email>
                </PhoneSection>
                </ContactBottom>
            </ContactRight>
            </CardConatiner>
            
    </Container>
    </div>
  )
}

export default Members 