import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Movie from "../pages/Details/Movie";
import Error from "../pages/Error/Error";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movie/:id"} element={<Movie />} />
        <Route path={"/page-error"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
