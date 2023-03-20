import styled from "styled-components";
import format from "../../utils/format";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 0px;
  h2 {
    color: #f7d354;
    align-self: flex-start;
    margin-left: ${format(112)};
  }
`;

export const HeaderDeatail = styled.header`
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 600px;
  margin-top: 56px;

  ////////////// Responsividade /////////////////
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const Cartaz = styled.img`
  width: ${format(383)};
  max-width: 383px;
  min-width: 350px;
  height: ${format(574)};
  max-height: 574px;
  min-height: 500px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: ${format(72)};
  margin-left: ${format(112)};
`;

export const FilmDetail = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 72px;
  margin-left: 33px;
  color: #f7d354;
`;

export const Titulo = styled.h1`
  font-weight: 700;
  font-size: calc(1.5rem + 1.7vw);
  margin-bottom: 8px;
`;

export const Dados = styled.p`
  display: flex;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Generos = styled.p`
  font-weight: 400;
  font-size: 18px;
`;

export const Avalia = styled.p`
  margin-bottom: 32px;
`;

export const TituloSinopse = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Sinopse = styled.p`
  width: 700px;
  font-weight: 400;
  font-size: 16px;
  color: #f7d354;
  margin-bottom: 8px;
  margin-bottom: 24px;
`;

export const Creditos = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  height: 180px;
  overflow: hidden;
  div {
    h5 {
      font-size: 16px;
      font-weight: 700;
      width: 172px;
      margin-right: 33px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 23px;
      width: 174px;
      margin-right: 33px;
    }
  }
`;

export const ElencoBox = styled.section`
  width: 100%;
  max-width: 1440px;
  margin-top: 30px;
  h2 {
    margin-left: 112px;
  }
`;

export const AtorBox = styled.div`
  display: flex;
  margin: 0px 112px 0px 97px;
  overflow: auto;
  gap: 16px;
  ::-webkit-scrollbar {
    height: 12px;
    background: #dddddd;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #adadad;
    height: 12px;
    border-radius: 10px;
  }
  ////////////// Responsividade /////////////////
  @media (max-width: 1000px) {
    margin: 15px;
  }
`;

export const Elenco = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  width: 191px;
  height: 336px;
  left: 0px;
  top: 0px;
  color: #f7d354;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  gap: 16px;
  margin-bottom: 26px;
  img {
    width: 175px;
    height: 222px;
    border-radius: 4px;
  }
  h5 {
    font-weight: 700;
    font-size: 18px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const TrailerBox = styled.section`
  position: relative;
  height: 0;
  padding-top: 25px;
  padding-bottom: 56.25%;
  width: 100%;
  max-width: 1440px;
  margin-top: 30px;

  iframe {
    position: absolute;
    width: 100%;
    max-width: 907px;
    top: 0;
    left: 112px;
    height: 100%;
    max-height: 510px;
  }
  ////////////// Responsividade /////////////////
  @media (max-width: 1000px) {
    iframe {
      left: 10px;
      right: 10px;
    }
  }
`;

export const TrailerVideo = styled.div``;

export const RecomendaBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin-top: 30px;
  h2 {
    margin-left: 112px;
  }

  ////////////// Responsividade /////////////////
  @media (max-width: 1000px) {
    margin: 15px;
    padding: 5px;
  }
  h2 {
    margin-left: 10px;
  }
`;

export const FilmesReco = styled.div`
  display: flex;
  margin-left: 112px;
  gap: 32px;
  ////////////// Responsividade /////////////////
  @media (max-width: 1000px) {
    margin: 15px;
    padding: 5px;
  }
`;

export const Filme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 191px;
  height: 336px;
  left: 0px;
  top: 0px;
  color: #f7d354;
  border-radius: 4px;
  gap: 8px;
  margin-bottom: 26px;
  img {
    width: 176px;
    height: 264px;
    border-radius: 4px;
  }
  h5 {
    font-weight: 700;
    font-size: 18px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
  }
`;
