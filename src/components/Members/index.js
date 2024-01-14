import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding: 50px 0px;
    background: transparent;
    position: relative; /* Add position: relative to the container */
    z-index: 1;`;

const CardConatiner = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    align-items: center;
    width: 100%;
    gap: 50px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 300px;
    justify-content: center;
    border: 1px solid #B41010;
    border-radius: 12px 12px;
    background: white;
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
color: #FF9898;
font-size: 20px;
text-align: center;

`;

const Email = styled.div`
color: #FF9898;;
font-size: 20px;
text-align: center;
`;

const Job = styled.div`
color: #FF9898;;
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

const Members = () => {

    function myfunction() {
        let x = document.querySelectorAll('.contactRight');
    
        x.forEach((element) => {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        });
    }

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
          height: '100%',
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
                    <Button>Show Contacts</Button>
                </ButtonContainer>
            </Card>
            <Card>
                <Image src={require('../../images/emma - Copy.png')} />
                <Title>Emma Biersdorfer</Title>
                <Job>Real Estate Agent</Job>
                {/* <Phone>918923823293</Phone>
                <Email>ebiersdorfer@kw.com</Email> */}
                <ButtonContainer>
                    <Button onClick={myfunction}>Show Contacts</Button>
                </ButtonContainer>
            </Card>
            <div className='contactRight'>dsds</div>
        </CardConatiner>
    </Container>
    </div>
  )
}

export default Members 