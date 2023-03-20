import styled from "styled-components";
import format from "../utils/format";

/////// Styled Top ///////
export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 56px;
  background-color: #000;
  position: fixed;
  img {
    width: ${format(185)};
    min-width: 100px;
    height: ${format(24)};
    min-height: 20px;
    margin: 0px 112px;
  }
  /////////////// Responsividade top ////////
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`;

/////// Styled Genero Filmes /////////
export const Button = styled.div`
  background-color: white;
  color: #323232;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #f7d354;
  }
`;
