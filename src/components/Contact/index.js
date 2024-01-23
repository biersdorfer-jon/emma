import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import './form.css';

const Container =styled.div`
    width: 100%;
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 200px 0px;
    
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
    width:400px;
  }
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1; /* Set a lower z-index to place Circle underneath InnerContainer */
  border-radius: 50%;
  width: 1300px;
  height: 900px;
  background: rgb(255,152,152);
  background: linear-gradient(90deg, rgba(255,152,152,1) 0%, rgba(180,16,16,1) 100%);

  @media (max-width: 970px) {
    width: 700px;
    height: 500px;
  }
`;


const ContactContainer = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 50px 0px;

`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
`;

const Image = styled.img`
  width: 100%;

`;

const Heading = styled.div`

color: #b41010;
font-size: 28px;
font-weight: 700;
width: 60%;

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


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wxsoqzt', 'template_pi0v7sp', form.current, 'aB_HJVmmrkINkTDHZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <Container id='contact'>
      <Circle />
      <InnerContainer>
      
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
    
    </Container>

    
  )
}

export default Contact