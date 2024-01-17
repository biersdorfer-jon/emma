import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Members from './components/Members';
import Slide from './components/Slider';


const Body = styled.div`
background-color: silver;
width: 100%;
height: 100%;
`;

function App() {

  return (
    <Router>
      <Body>
        <Nav />
        <Hero />
        <About />
        <Team />
        <Members />
        <Slide />
        <div style={{height: '100px',}}>Hey</div>
      </Body>
    </Router>
    );
}

export default App;
