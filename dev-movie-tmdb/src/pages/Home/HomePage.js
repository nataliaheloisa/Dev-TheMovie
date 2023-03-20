import Topo from "../../components/Top";
import {
  Container,
  ListaFilmes,
  ContainerCat,
  Cabecalho,
  First,
  Last,
  Next,
  Numbers,
  Paginacao,
  Prev,
} from "./Styled";
import MovieCard from "../../components/MovieCard";
import React, { useContext, useEffect } from "react";
import { LANGUAGE, BASE_URL, API_KEY, GENRE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { GlobalContext } from "../../global/GlobalContext";
import FilmesGenero from "../../components/FilmesGenero";
import moment from "moment";

const HomePage = () => {
  const { states, setters, functions } = useContext(GlobalContext);

  const { setCurrentPage } = setters;

  //Chamada da API
  const dataList = useRequestData(
    `${BASE_URL}/popular?${API_KEY}&${LANGUAGE}&page=${states.currentPage}`
  );

  const dataGenero = useRequestData(`${GENRE_URL}?${API_KEY}&${LANGUAGE}`);

  useEffect(() => {
    if (dataGenero && dataGenero.genres) {
      setters.setCategorias = dataGenero.genres.map((nome) => nome);
    }
  });

  const filteredItems =
    states.selectedGeneros.length > 0
      ? dataList.results.filter((movie) =>
          movie.genre_ids.every((generoId) =>
            states.selectedGeneros.includes(generoId)
          )
        )
      : dataList.results;

  const filmesList =
    filteredItems &&
    filteredItems.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.id}
          title={movie.title}
          date={moment(movie.release_date).format("DD MMM YYYY")}
          idGenero={movie.genre_ids}
          onClick={`/movie/${movie.id}`}
        />
      );
    });

  const filmesGenero =
    dataGenero &&
    dataGenero.genres &&
    dataGenero.genres.map((genere) => {
      return (
        <FilmesGenero
          onClick={functions.onCategoryClick}
          selected={states.selectedGeneros.includes(genere.id)}
          key={genere.id}
          name={genere.name}
          id={genere.id}
        />
      );
    });

  const pagesPagination = Array.from(
    Array(dataList.total_pages),
    (item, index) => {
      return (
        index < 10 && (
          <Numbers
            key={index}
            value={index}
            onClick={() => setCurrentPage(Number(index + 1))}
            isSelect={index + 1 === states.currentPage}
          >
            {index + 1}
          </Numbers>
        )
      );
    }
  ).slice(0, 10);
  console.log(states.currentPage);

  return (
    <Container>
      <div>
        <Topo />
        <Cabecalho>
          <h2>Os melhores filmes pra você. Explore já!</h2>
          <p>Escolha seu gênero favorito:</p>

          <ContainerCat>{filmesGenero}</ContainerCat>
        </Cabecalho>
      </div>
      <ListaFilmes>{filmesList}</ListaFilmes>

      <Paginacao>
        {<First onClick={() => setCurrentPage(1)}>Primeira</First>}
        {
          <Prev
            onClick={() =>
              setCurrentPage(
                states.currentPage === 1
                  ? states.currentPage
                  : states.currentPage - 1
              )
            }
          >
            &lt;
          </Prev>
        }
        {pagesPagination}
        {
          <Next
            onClick={() =>
              setCurrentPage(
                states.currentPage === 10
                  ? states.currentPage
                  : states.currentPage + 1
              )
            }
          >
            &gt;
          </Next>
        }
        {<Last onClick={() => setCurrentPage(10)}>Última</Last>}
      </Paginacao>
    </Container>
  );
};

export default HomePage;
