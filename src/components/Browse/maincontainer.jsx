import { useSelector } from "react-redux";
import MainMovieVideo from "./mainMovieVideo";
import { useEffect, useState } from "react";
import { MOVIE_OPTIONS, MOVIE_URL } from "../utility/constants";
import MainMovieDetail from "./mainmovieDetail";

const MainContainer = () => {
  const [movieVideo, setMovieVideo] = useState(null);
  const movie = useSelector((movie) => movie.movie);
  const topMovie = movie?.nowPlayingMovies?.results[1];

  const fetchMovieVideo = async () => {
    if (topMovie) {
      const response = await fetch(
        MOVIE_URL + topMovie?.id + "/videos?language=en-US",
        MOVIE_OPTIONS,
      );
      const movieVideo = await response.json();
      setMovieVideo(movieVideo);
    }
  };

  useEffect(() => {
    fetchMovieVideo();
  }, [topMovie]);

  return (
    <>
      <MainMovieVideo movieVideo={movieVideo} />
      <MainMovieDetail topMovie={topMovie} />
    </>
  );
};

export default MainContainer;
