import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/sobrefundo.jpg';
import rosiImage from '../../assets/rosi.png';

// Estilo do título
const Title = styled.h1`
  text-align: center;
  font-family: 'Permanent Marker', serif;
  font-size: 2rem;
  font-weight: 400; 
  font-style: normal; 
  position: absolute; 
  top: 20px; // Ajustar a posição do título
  width: 100%;
  z-index: 1; 
  color: white;
`;

const AboutContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 80px); // Ajustar a altura para levar em conta o menu superior
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative; // Tornar o contêiner relativo para o título absoluto funcionar
  margin-top: 80px; 
`;

const AboutContent = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.6); 
  border-radius: 15px;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 300px; // Adicionar margem superior para descer o conteúdo
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 20px;
  color: black;
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>Sobre mim...</Title>
      <AboutContent>
        <TextSection>
          <p>
            Nutricionista formada pela Universidade Paulista - UNIP, 2010, pós graduada na especialização em Nutrição clínica: Fundamentos metabólicos e nutricionais (Universidade Gama Filho - UGF, 2012) e Especializada em Prescrição de fitoterápicos e suplementação nutricional clínica e esportiva (Universidade Estácio de Sá, 2017), registrada no Conselho federal de nutricionistas (CFN) junto do Conselho regional de Nutrição (CRN) da região 3 (MT/SP) apta a prescrever fitoterápicos a partir de 2018. Possui experiência em atendimentos nutricionais para melhorar diversas doenças, atendimento de home care, ganho e perda de peso, esporte, suplementação, planejamento alimentar e cardápio. Realiza atendimentos online e presencial.
          </p>
        </TextSection>
        <ImageSection>
          <Image src={rosiImage} alt="Foto de Rosilene" />
        </ImageSection>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
