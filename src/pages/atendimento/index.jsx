import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/sobrefundo.jpg';

const AtendimentoContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  margin-top: 80px;
`;

const AtendimentoContent = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: row; /* Define a direção das divs como linha */
  justify-content: space-between; /* Espaça os elementos de forma justa */
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'Permanent Marker', serif;
  font-size: 2rem;
  font-weight: 400;
  font-style: normal;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  color: white;
  margin-bottom: 20px;
  margin-top: 80px;
  width: 100%; 
`;

const Text = styled.div`
  flex: 1; /* Permite que o texto ocupe o espaço restante */
  padding: 20px;
  text-align: left;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: black;
  line-height: 1.6;
`;

const Map = styled.iframe`
  flex: 1; 
  border: 0;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  margin-right: 20px; 
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  z-index: 1;
`;

const Atendimento = () => {
  return (
    <AtendimentoContainer>
      <Title>Atendimento</Title>
      <AtendimentoContent>
        <Map 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.118033296933!2d-46.70415716962437!3d-23.709586427060753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fb0b151cecd%3A0xb90502a53dd66aa7!2sSPA%20Gra%C3%A7a%20e%20Harmonia.!5e0!3m2!1spt-BR!2sbr!4v1735749835570!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
        ></Map>
        <Text>
          Oferecemos atendimento de forma presencial e online. Nosso objetivo é fornecer suporte personalizado e flexível, atendendo às suas necessidades onde quer que você esteja. Agende sua consulta para receber orientação especializada e melhorar sua saúde e bem-estar.
        </Text>
      </AtendimentoContent>
      <ButtonContainer>
        <Button href="https://wa.me/11960224532" target="_blank" rel="noopener noreferrer">
          Agende sua Consulta
        </Button>
      </ButtonContainer>
    </AtendimentoContainer>
  );
};

export default Atendimento;
