import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
width: 100%;
display: flex;
background: #b41010;
align-items: center;
color: white;
justify-content: center;
flex-direction: row;
margin-top: 50px;

`;


const Footer = () => {
  return (
    <Container>
    <div>Footer</div>
    </Container>
  )
}

export default Footer