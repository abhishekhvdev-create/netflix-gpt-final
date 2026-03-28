import { MOVIE_OPTIONS, MOVIE_URL } from "../utility/constants";

import { useEffect } from "react";
import {
  addNowPlayingMovies,
  addpopularMovies,
  addTopRatedMovies,
  addUpcommingMovies,
} from "../utility/movieSlice";
import MainContainer from "./maincontainer";
import SecondaryContainer from "./secondarycontainer";
import Signout from "./signout";
import { useDispatch } from "react-redux";

const Browse = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      MOVIE_URL + "now_playing?language=en-US&page=1",
      MOVIE_OPTIONS,
    );
    const nowPlayingMovies = await data.json();
    dispatch(addNowPlayingMovies(nowPlayingMovies));
  };
  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      MOVIE_URL + "top_rated?language=en-US&page=1",
      MOVIE_OPTIONS,
    );
    const topRatedMovies = await data.json();
    dispatch(addTopRatedMovies(topRatedMovies));
  };
  const fetchPopularMovies = async () => {
    const data = await fetch(
      MOVIE_URL + "popular?language=en-US&page=1",
      MOVIE_OPTIONS,
    );
    const popularMovies = await data.json();
    dispatch(addpopularMovies(popularMovies));
  };
  const fetchUpcommingMovies = async () => {
    const data = await fetch(
      MOVIE_URL + "upcoming?language=en-US&page=1",
      MOVIE_OPTIONS,
    );
    const upcommingMovies = await data.json();
    dispatch(addUpcommingMovies(upcommingMovies));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
    fetchTopRatedMovies();
    fetchPopularMovies();
    fetchUpcommingMovies();
  }, []);

  return (
    <>
      <div className="bg-black">
        <MainContainer />
        <Signout />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
