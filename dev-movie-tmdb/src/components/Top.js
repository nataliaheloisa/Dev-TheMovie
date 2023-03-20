import React from "react";
import { Top } from "./Styled";
import Logo from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

const Topo = () => {
  const navigate = useNavigate();
  const voltar = (value) => {
    navigate(value);
  };

  return (
    <Top onClick={() => voltar("/")}>
      <img src={Logo} alt="Logotipo da página" />
    </Top>
  );
};

export default Topo;
