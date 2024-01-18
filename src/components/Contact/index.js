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
`;

const ContactContainer = styled.div`
  flex-direction: column;
  width: 30%;

`;

const ImageContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
`;

const Heading = styled.div`

color: #b41010;
font-size: 30px;
font-weight: 700;

`;


const FormConatainer = styled.div`
    width: 500px;
    border: 1px solid #b41010;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;

`;

const Input = styled.input`
  width: 60%;
  height: 50px;
  margin: 10px;
  font-size: 17px;
  padding-left: 5px;
  
`;

const Message = styled.textarea`
width: 60%;
height: 50px;
font-size: 17px;
margin: 10px;
padding-left: 5px;
padding-top: 12px;
resize: none;
`;

const Button = styled.input`

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
      <ContactContainer>
      <FormConatainer>
        <Heading>Get In Touch With Us</Heading>
        <form ref={form} onSubmit={sendEmail}>
          <Input placeholder="Full Name"type="text" name="from_name" required />
          <Input placeholder='Email Address' type="email" name="from_email" required />
          <Message placeholder='Message' name="message"  required/>
          <input type="submit" value="Send" />
      </form>
      </FormConatainer>
      </ContactContainer>

      <ImageContainer>
        <Image src={require('../../images/office.jpg')} />
      </ImageContainer>
    
    </Container>

    
  )
}

export default Contact