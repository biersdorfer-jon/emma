import React from 'react'
import styled from 'styled-components';
import Monitor from '../Icons/monitor';
import Home from '../Icons/home';
import Users from '../Icons/users';
import Heart from '../Icons/heart';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: white;
    padding-top: 40px;
`;

const Top = styled.div`
    font-size: 50px;
    color: #B41010;
    font-weight: 800;


`;

const Sub = styled.div`
    color: black;
    font-size: 20px;
    width: 60%;
    text-align: center;
    padding: 10px 0px;
`;

const SkillContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background: white;
    gap: 50px;
    padding-top: 50px;
    
    `;


const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const IconContainer = styled.div`
    background: #FF9898;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0px;
    margin-bottom: 10px;

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
    }
`;

const Title = styled.div`
    color: #B41010;
    font-size: 24px;    
    font-weight: 700;
    text-align: center;
    padding: 6px 0px;
`;

const Desc = styled.div`
    text-align: center;
    font-size: 16px;
    width: 350px;
    height: 200px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 20px;

`;

const AwardContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;    
    align-items: center;
`;
    
const Award = styled.img`
    width: 45%;
`;

const Sub2 = styled.div`
    color: black;
    font-size: 18px;
    width: 50%;
    text-align: center;
    padding: 10px 0px;
`;

const About = () => {
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       console.log(entry)
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add('show');
    //       } else {
    //         entry.target.classList.remove('show');
    //       }
    //     })
    //   })
    //   const hiddenElements = document.querySelectorAll('.hidden')
    // hiddenElements.forEach((el) => observer.observe(el));
       
  return (
    <Container className='show' id='about'>
    <Top>65+ Years of Experience</Top>
    <Sub>Our team's extensive experience has been built on a foundation of unparalleled customer care. We are committed to providing you with a personalized, stress-free, and seamless real estate experience.</Sub>
    <ImageContainer>
        <Award src={require('../../images/realProdRed.png')}/>
    </ImageContainer>
    <Sub2>For the year of 2024, this team have earned their way to becoming one of the top 500 real estate agents in the Tulsa Metro through their MLS residential production in Tulsa County and the counties touching Tulsa County. </Sub2>

    <SkillContainer>
        <Skill>
        <IconContainer>
            <Home />
        </IconContainer>
            <Title>Market Mastery</Title>
            <Desc>Our deep knowledge of the real estate industry, market trends, and negotiation skills ensures that you receive the best possible results. We are masters of our craft, dedicated to maximizing the value of your investments.</Desc>
        </Skill>
        <Skill>
            <IconContainer><Monitor /></IconContainer>
            <Title>Innovative Technology</Title>
            <Desc>In the ever-evolving world of real estate, we stay at the forefront of technology trends. From advanced marketing strategies to cutting-edge tools, we leverage the latest innovations to benefit you.</Desc>
        </Skill>
        <Skill>
            <IconContainer><Users /></IconContainer>
            <Title>Local Expertise</Title>
            <Desc>As longtime residents of this community, we possess an intimate understanding of the local market. We know the neighborhoods, schools, and amenities like the back of our hands, enabling us to find your dream property or market your home effectively.</Desc>
        </Skill>
        <Skill>
            <IconContainer><Heart /></IconContainer>
            <Title>Relentless Passion</Title>
            <Desc>Real estate isn't just our profession; it's our passion. We approach each transaction with enthusiasm, dedication, and a genuine love for what we do. Your goals are our goals, and we are committed to helping you achieve them.</Desc>
        </Skill>
    </SkillContainer>
    </Container>
  )
}

export default About