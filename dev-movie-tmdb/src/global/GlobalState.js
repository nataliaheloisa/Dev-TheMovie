import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesToShow, setPagesToShow] = useState(5);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [selectedGeneros, setSelectedGeneros] = useState([]);
  const [itens, setItens] = useState([]);
  const [generos, setGeneros] = useState([]);

  const onCategoryClick = (categoryId) => {
    if (selectedGeneros.includes(categoryId)) {
      setSelectedGeneros(selectedGeneros.filter((dado) => dado !== categoryId));
    } else {
      setSelectedGeneros([...selectedGeneros, categoryId]);
    }
  };

  const states = {
    totalPages,
    currentPage,
    pagesToShow,
    pageNumbers,
    selectedGeneros,
    itens,
    generos,
  };

  const setters = {
    setTotalPages,
    setCurrentPage,
    setPageNumbers,
    setPagesToShow,
    setSelectedGeneros,
    setItens,
    setGeneros,
  };

  const functions = {
    onCategoryClick,
  };

  return (
    <GlobalContext.Provider value={{ states, setters, functions }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
