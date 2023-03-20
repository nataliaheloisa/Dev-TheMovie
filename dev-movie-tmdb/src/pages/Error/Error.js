import { ErrorImage, ErrorPageContainer } from "./Styled";
import errorImg from "../../assets/404-error-page-not-found.jpg";

const Error = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={errorImg} />
      <h2>Erro 404 - Página Não Encontrada</h2>
    </ErrorPageContainer>
  );
};

export default Error;
