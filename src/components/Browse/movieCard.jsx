const MovieCard = ({ movies, heading }) => {
  console.log("movies", movies);
  if (!movies) return;
  return (
    <div className="mt-15 text-white bg-black">
      <p className="font-bold text-2xl my-2">{heading}</p>
      <div className="flex overflow-x-scroll hide-scrollbar snap-x snap-mandatory ">
        {movies?.results?.map((movie) => {
          return (
            <>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
                alt={movie.title}
                width="180px"
                className="px-0"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
