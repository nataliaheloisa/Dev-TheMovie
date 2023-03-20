import React from "react";
import { Button } from "./Styled";

const GenerosFilmes = ({ id, name, selected, onClick }) => {
  return (
    <Button
      className={`${selected ? "selected" : ""}`}
      onClick={() => onClick(id)}
    >
      {name}
    </Button>
  );
};

export default GenerosFilmes;
