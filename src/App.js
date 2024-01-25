import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Members from './components/Members';
import Slide from './components/Slider';
import ListHeader from './components/ListHeader';
import Contact from './components/Contact';
import Footer from './components/Footer';


const Body = styled.div`
background-color: white;
width: 100%;
height: 100%;
max-width: 100%;
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
        <ListHeader />
        <Slide />
        {/* <Contact /> */}
        <Footer />
      </Body>
    </Router>
    );
}

export default App;
