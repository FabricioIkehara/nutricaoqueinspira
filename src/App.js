// App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/home/index.jsx'; 
import Atendimento from './pages/atendimento/index.jsx';
import About from './pages/about/index.jsx';
import logoImage from './assets/logo.jpg';
import instaLogo from './assets/instalogo.png'; 
import linkedinLogo from './assets/linkedinlogo.png'; 
import tiktokLogo from './assets/tiktoklogo.png'; 
import whatsappLogo from './assets/whatsapplogo.png'; 

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to right, #ef8af4, #9370db, #d8bfd8); 
  position: fixed;
  border: 2px solid #ccc;
  width: 100%;
  top: 0;
  z-index: 2;
  margin: 0; 
  box-sizing: border-box; 
`;

const NavLogo = styled.img`
  height: 60px;
  margin-right: 20px; // Espaço entre o logo e os itens de navegação
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1; // Permitir que o container cresça para preencher o espaço disponível
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 0.5rem; // Reduzir margem entre itens
  font-family: 'Permanent Marker', serif; // Aplicar a fonte
  font-weight: 400;
  font-style: normal;
  &:hover {
    color: #ccc;
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
  }
`;

const WhatsAppButton = styled.a`
  margin-left: auto; 
  margin-right: 40px;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  img {
    width: 50px; 
    height: 50px; 
    margin-left: 10px;
  }
  span { 
    text-decoration: underline;
    margin-right: 10px;
    font-family: "Lato", serif;
  }

  &:hover {
    transform: scale(1.3);
    transition: transform 0.3s; // Transição suave para o efeito de hover
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to right, #ef8af4, #9370db, #d8bfd8); 
  border: 2px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-family: Arial, sans-serif;
`;

const FooterIcon = styled.a`
  margin-right: 10px;
  display: inline-block;
  width: 40px; 
  height: 40px; 
  transition: transform 0.3s; 
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.5); 
  }
`;

const EmailLink = styled.a`
  color: white;
  text-decoration: underline;
  transition: transform 0.3s, color 0.3s; 

  &:hover {
    color: #e8aeeb;
    transform: scale(1.3); 
  }
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar>
        <NavLogo src={logoImage} alt="Logo" /> 
        <NavItemsContainer>
          <NavMenu isOpen={isOpen}>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/atendimento">Atendimento</NavItem>
            <NavItem href="/about">Sobre mim</NavItem>  
          </NavMenu>
        </NavItemsContainer>
        <WhatsAppButton href="https://wa.me/11960224532" target="_blank" rel="noopener noreferrer"> 
          <span>Entre em contato</span> 
          <img src={whatsappLogo} alt="WhatsApp Logo" />
        </WhatsAppButton>
        <MenuToggle onClick={toggleMenu}>☰</MenuToggle>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer>
        <FooterSection>
          <h4>Endereço</h4>
          <p>Rua Acuti, 274</p>
          <p>São Paulo, SP, Brasil</p>
        </FooterSection>
        <FooterSection>
          <h4>Email</h4> 
          <p>
            <EmailLink href="mailto:nutricaoqueinspira@gmail.com">
              nutricaoqueinspira@gmail.com
            </EmailLink>
          </p>
        </FooterSection>
        <FooterSection>
          <h4>Redes Sociais</h4>
          <div>
            <FooterIcon href="https://www.instagram.com/rksi.nutri/" target="_blank" rel="noopener noreferrer">
              <img src={instaLogo} alt="Instagram Logo" />
            </FooterIcon>
            <FooterIcon href="https://www.linkedin.com/in/rosilene-k-s-69b9b2213/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </FooterIcon>
            <FooterIcon href="https://www.tiktok.com/@nutricaoqueinspir" target="_blank" rel="noopener noreferrer">
              <img src={tiktokLogo} alt="TikTok Logo" />
            </FooterIcon>
          </div>
        </FooterSection>
      </Footer>
    </Router>
  );
}

export default App;
