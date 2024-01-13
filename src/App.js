import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';


const Body = styled.div`
background-color: silver;
width: 100%;
height: 100%;
z-index: 1;

`;

function App() {

  return (
    <Router>
      <Body>
        <Nav />
        <Hero />
        <About />
        <Team />
      </Body>
    </Router>
    );
}

export default App;
