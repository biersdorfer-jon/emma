import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
    overflow-x: hidden;
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

    @media (max-width: 750px) {
        width: 100%;
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
        background-color: rgba(255, 255, 255, 0.9); /* Transparent white background */
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
        background-color: rgba(255, 255, 255, 0.9); /* Transparent white background */
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
  background-image: url(${require('../../images/Kw2.png')});
  background-size: contain;
  background-position: center;
  filter: brightness(0.7);

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

    useEffect(() => {
        const handleScroll = () => {
            const leftContactElement = document.querySelector('.left');
            const rightContactElement = document.querySelector('.right');
    
            if (showLeftContact && leftContactElement) {
                const rect = leftContactElement.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > window.innerHeight) {
                    setShowLeftContact(false);
                }
            }
    
            if (showRightContact && rightContactElement) {
                const rect = rightContactElement.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > window.innerHeight) {
                    setShowRightContact(false);
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showLeftContact, showRightContact]);
    
  
  

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Animation function
        const animateElements = (startPoint, endPoint) => {
          gsap.fromTo(
            '.left',
            {
              opacity: 0,
              transform: 'translateX(-600px)',
            },
            {
              opacity: 1,
              transform: 'translateX(0)',
              duration: 5,
              scrollTrigger: {
                trigger: '.members',
                start: startPoint,
                end: endPoint,
                scrub: 1,
                toggleActions: 'play none none none',
              },
            }
          );
      
          gsap.fromTo(
            '.right',
            {
              opacity: 0,
              transform: 'translateX(600px)',
            },
            {
              opacity: 1,
              transform: 'translateX(0)',
              duration: 5,
              scrollTrigger: {
                trigger: '.members',
                start: startPoint,
                end: endPoint,
                scrub: 1,
                toggleActions: 'play none none none',
              },
            }
          );

        };

        
      
        // Media query for screens with a minimum width of 800px
        const mediaQuery800 = window.matchMedia('(max-width: 1450px)');
        if (mediaQuery800.matches) {
          animateElements('top 100%', 'top 60%');
        }
      
        // Media query for screens with a minimum width of 1900px
        const mediaQuery1900 = window.matchMedia('(min-width: 1451px)');
        if (mediaQuery1900.matches) {
          animateElements('top 90%', 'bottom 100%');
        }
      
        // Event listener for changes in media query status
        const handleMediaQueryChange = (event) => {
          if (event.matches) {
            // Media query matches, apply animations
            animateElements('translateX(-600px)', 'translateX(600px)');
          }
        };
      
        // Add event listeners for media query changes
        mediaQuery800.addListener(handleMediaQueryChange);
        mediaQuery1900.addListener(handleMediaQueryChange);
      
        // Clean up event listeners on component unmount
        return () => {
          mediaQuery800.removeListener(handleMediaQueryChange);
          mediaQuery1900.removeListener(handleMediaQueryChange);
        };
      }, []);
      

    
    

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '',
        position: 'relative',
      }}
    >
     <BackgroundImage />

    <Container className='members'>
        <CardConatiner>
            <Card className='left'>
                <Image src={require('../../images/todd - Copy.png')} />
                <Title>Todd McCoy</Title>
                <Job>Real Estate Agent</Job>
                <ButtonContainer>
                    <Button onClick={toggleLeftContact}>Show Contacts</Button>
                </ButtonContainer>
            </Card>
            <Card className='right'> 
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
                <Phone href="tel:+17204903418">Mobile: (720) 490-3418</Phone>
                <Phone href="tel:+19182512252">Office: (918) 251-2252</Phone>
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