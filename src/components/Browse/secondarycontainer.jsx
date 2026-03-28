import { useSelector } from "react-redux";
import MovieCard from "./movieCard";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie);
  if (!movie) return null;
  return (
    <>
      <MovieCard movies={movie.nowPlayingMovies} heading="Now Playing Movies" />
      <MovieCard movies={movie.topRatedMovies} heading="Top Rated Movies" />
      <MovieCard movies={movie.upcommingMovies} heading="Upcomming Movies" />
      <MovieCard movies={movie.popularMovies} heading="Popular Movies" />
    </>
  );
};

export default SecondaryContainer;
