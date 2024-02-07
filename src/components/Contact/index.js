import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import './form.css';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaCheckCircle } from "react-icons/fa";


const Container =styled.div`
    width: 100%;
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 200px 0px;
    

    @media (max-width: 700px) {
      padding: 100px 0px;
    }

    @media (max-width: 600px) {
      padding: 50px 0px;
    }

    @media (max-width: 400px) {
      padding: 30px 0px;
    }


`;

const InnerContainer = styled.div`
  position: relative;
  z-index: 2; /* Make InnerContainer appear above Circle */
  max-width: 700px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 20px 0px;
  background: white;

  @media (max-width: 970px) {
    width: 600px;
  }

  @media (max-width: 835px) {
    
    width: 500px;
  }

  @media (max-width: 600px) {
    
    width: 450px;
  }

  @media (max-width: 500px) {
    
    width: 350px;
  }

  @media (max-width: 400px) {
    
    width: 280px;
  }
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1; /* Set a lower z-index to place Circle underneath InnerContainer */
  border-radius: 50%;
  width: 1300px;
  height: 900px;
  background-image: url(${require('../../images/Kw2.png')});
  filter: brightness(0.8);
  // background: rgb(255,152,152);
  // background: linear-gradient(90deg, rgba(255,152,152,1) 0%, rgba(180,16,16,1) 100%);

  @media (max-width: 1502px) {
    width: 95%;
  }

  @media (max-width: 970px) {
    height: 900px;

  }

  @media (max-width: 810px) {
    height: 800px;
    border-radius: 40%;
  }

  @media (max-width: 700px) {
    height: 800px;
    border-radius: 0%;
    width: 100%;
  }

  @media (max-width: 600px) {
    height: 650px;
    border-radius: 0%;
    width: 100%;
  }
`;


const ContactContainer = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 50px 0px;

  @media (max-width: 970px) {
    padding: 20px 0px;
  }

`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;

  @media (max-width: 600px) {
    display:none
  }
`;

const Image = styled.img`
  width: 100%;

`;

const Heading = styled.div`

color: #b41010;
font-size: 28px;
font-weight: 700;
width: 60%;
display: flex;

@media (max-width: 600px) {
  text-align: center;
}

`;

const SubHead = styled.div`
  font-size: 15px;
  font-weight: 500;
  width: 60%;
  color: black;
  display: flex;
  padding-top: 8px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    text-align: center;
  }
`;


const FormConatainer = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

`;

const Input = styled.input`
  width: 60%;
  height: 50px;
  margin: 10px;
  font-size: 16px;
  padding-left: 5px;
  
`;

const Message = styled.textarea`
width: 60%;
height: 100px;
font-size: 16px;
margin: 10px;
padding-left: 5px;
padding-top: 12px;
resize: none;
`;

const Button = styled.input`
width: 60%;
height: 50px;
padding-top: 6px;
margin: 10px;
padding-left: 5px;
font-size: 16px;
background: #b41010;
color: white;
cursor: pointer;
border: 1px solid #b41010;
transition: all 0.4s ease;

&:hover{
  transform:scale(.9);
}

`;

const PopDesc = styled.div`
  padding-top: 15px;  
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  width: 70%
`;


const PopButton = styled.a`
  width: 70px;
  height: 25px;
  margin-top: 20px;
  padding-top: 3px;
  text-align: center;
  font-size: 16px;
  background: #b41010;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #b41010;
  transition: all 0.4s ease;

  &:hover{
    transform:scale(.9);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0; /* Adjust this value as needed */
  left: 50%;
  width: 400px;
  z-index: 10;  
  height: 20%;
  transform: translateX(-50%);
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px ;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 760px) {
    width: 50%;
    height: 200px;
    top: 35%;
    align-items: center;
    justify-content: center;
    background: white;
  }

  @media (max-width: 500px) {
    width: 75%;
  }
`;

const PopBack = styled.div`
  background: transparent;

  @media (max-width: 760px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5); /* White with 50% opacity */
    backdrop-filter: blur(10px); /* Adjust the blur radius as needed */
    z-index: 9; /* Ensure the blurred background is behind the popup */
  }

  @media (max-width: 500px) {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
  }
`;







const Contact = () => {

  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    
  
    emailjs.sendForm('service_q9bi7e9', 'template_6jhis1s', form.current, 'uc1CyzydfkNsG1RIr')
      .then((result) => {
          console.log(result.text);
          setIsMessageSent(true);
          // Clear the form fields upon successful submission
          form.current.reset();
      })
      .catch((error) => {
          console.log(error.text);
      });
  };
  

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      '.contactInner', // Target element or class
      {
        opacity: 0,
        transform: 'translateY(50px)', // Optional: Set the initial transform for animation
      },
      {
        opacity: 1,
        transform: 'translateY(0)', // Optional: Set the final transform for animation
        duration: 5,
        scrollTrigger: {
          trigger: '.contactInner',
          start: 'top 90%', // Adjust the start position as needed
        end: 'top 70%',  // Adjust the end position as needed
          scrub: 1, // Adjust the scrub value for smoother animation
          toggleActions: 'play none none none', // Adjust toggle actions as needed
        },
      }
    );
  });



  return (
    <Container id='contact'>
      <Circle />
      <InnerContainer className='contactInner'>
      
      <ContactContainer>
      <FormConatainer>
        <Heading>Get In Touch With Us</Heading>
        <SubHead>Fill out the form below and we will reach out as soon as we can.</SubHead>
        <form ref={form} onSubmit={sendEmail}>
          <Input placeholder="Full Name"type="text" name="from_name" required />
          <Input placeholder='Email Address' type="email" name="from_email" required />
          <Message placeholder='Message' name="message"  required/>
          <Button type="submit" value="Send" />
      </form>
      </FormConatainer>
      
      </ContactContainer>
      

      <ImageContainer>
        <Image src={require('../../images/office.jpg')} />
      </ImageContainer>

      </InnerContainer>
      {isMessageSent && (
        <PopBack>
          <Popup>
            <FaCheckCircle style={{color: '#b41010', fontSize: '40px',}}/>
            <PopDesc>Your message has successfully been sent!</PopDesc>
            <PopButton onClick={() => setIsMessageSent(false)}>Close</PopButton>
          </Popup>
        </PopBack>
        )}
    </Container>

    
  )
}

export default Contact