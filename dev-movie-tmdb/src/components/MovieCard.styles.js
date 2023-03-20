import styled from "styled-components";

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 176px;
  height: 400px;
  row-gap: 10px;
  /* position: relative; */
  &:hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 255) 0px 13px 27px -5px,
      rgba(255, 255, 255) 0px 8px 16px -8px;
  }
  p {
    text-transform: uppercase;
  }
`;

export const TituloCard = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #f7d354;
  text-align: center;
`;

export const CardImage = styled.img`
  border-radius: 4px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #e7e7e7;
`;
