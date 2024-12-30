// App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/home/index.jsx'; 
import About from './pages/about/index.jsx';
import logoImage from './assets/logo.jpg';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to right, #ef8af4, #9370db, #d8bfd8); // Gradiente em tons de roxo
  position: fixed;
  border: 2px solid #ccc;
  width: 100%;
  top: 0;
  z-index: 1;
  margin: 0; // Remover margens padrão
  box-sizing: border-box; // Inclui bordas e preenchimento na largura e altura
`;

const NavLogo = styled.img`
  height: 60px; // Ajuste a altura conforme necessário
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1; // Permitir que o container cresça para preencher o espaço disponível
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
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
  justify-content: center; // Centralizar os itens

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to right, #ef8af4, #9370db, #d8bfd8); // Gradiente em tons de roxo
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

const FooterIcon = styled.span`
  margin-right: 10px;
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
            <NavItem href="/about">About</NavItem>
          </NavMenu>
        </NavItemsContainer>
        <MenuToggle onClick={toggleMenu}>☰</MenuToggle>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer>
        <FooterSection>
          <h4>Endereço</h4>
          <p>Rua Exemplo, 123</p>
          <p>São Paulo, SP, Brasil</p>
        </FooterSection>
        <FooterSection>
          <h4>Email</h4>
          <p>contato@nutricaoqueinspira.com</p>
        </FooterSection>
        <FooterSection>
          <h4>Redes Sociais</h4>
          <div>
            <FooterIcon>📸 Instagram</FooterIcon>
            <FooterIcon>🔗 LinkedIn</FooterIcon>
            <FooterIcon>🎵 TikTok</FooterIcon>
          </div>
        </FooterSection>
      </Footer>
    </Router>
  );
}

export default App;
