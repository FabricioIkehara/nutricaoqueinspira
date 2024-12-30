// Home.jsx
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/home.jpg';
import homeGif from '../../assets/gifhome.gif'; // Importando o GIF

const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  overflow: hidden;
  position: relative;
  opacity: 0.7; 
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  z-index: 2; // Garantir que o conteúdo fique acima do overlay
  margin-top: 10%; // Espaço adicional abaixo do H1
`;

const HomeTitle = styled.h1`
  text-align: center;
  font-family: 'Permanent Marker', serif;
  font-size: 2rem;
  font-weight: 400; 
  font-style: normal; 
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  position: absolute; // Adicionado para posicionar o título
  top: 15%; // Move o título 15% do topo
`;

const HomeGif = styled.img`
  width: 300px; // Ajuste o tamanho do GIF conforme necessário
  height: auto;
  margin-right: 50px; // Aumentando o espaço entre o GIF e o texto
  transform: translateX(-10%); // Move o GIF mais para a esquerda
`;

const HomeText = styled.p`
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  color: black;
  background: rgba(255, 255, 255, 0.8); // Fundo semi-transparente para melhor legibilidade
  padding: 20px;
  border-radius: 10px; // Bordas arredondadas
  max-width: 500px; // Limitar a largura máxima do texto
`;

const Home = () => {
  return (
    <Background>
      <HomeTitle>
        Bem vindos à Nutrição Que Inspira
      </HomeTitle>
      <Content>
        <HomeGif src={homeGif} alt="Home Gif" /> {/* Adicionando o GIF */}
        <HomeText>
          Conheça a nutrição que inspira a não desistir de seus objetivos, de suas metas de vida e para a sua vida, de seus sonhos e desejos mais profundos relacionados a qualidade de vida e felicidade. A nutrição está aí para te ajudar e ser sua aliada! Sem terrorismos alimentares e sim harmonia e equilíbrio. Venha conhecer como podemos melhorar sua alimentação e seu bem estar!<br/><br/>
          Nutricionista especialista em nutrição clínica, metabólica e esportiva, prescrição de fitoterápicos e suplementação.
        </HomeText>
      </Content>
    </Background>
  );
}

export default Home;
