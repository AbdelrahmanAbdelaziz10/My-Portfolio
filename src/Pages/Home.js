import React from 'react';
import { Header } from './../Components/1-Header/Header';
import { Hero } from '../Components/2-Hero/Hero';
import { Project } from '../Components/5-Project/project';
import { Contact } from '../Components/6-Contact/Contact';
import { Footer } from '../Components/7-Footer/Footer';
import { Container } from 'react-bootstrap';
import About from '../Components/3-About/About';
import Skills from '../Components/4-Skills/Skills';




const Home = () => {
  return (
    <Container>
    <Header />
    <Hero />
    <div className='bor-bottom'/>
    <About />
    <div className='bor-bottom'/>
    <Skills />
    <div className='bor-bottom'/>
    <Project />
    <div className='bor-bottom'/>
    <Contact />
    <div className='bor-bottom'/>
    <Footer />
    </Container>
  )
}

export default Home