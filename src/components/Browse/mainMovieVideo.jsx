const MainMovieVideo = ({ movieVideo }) => {
  const youtubeVideo = movieVideo?.results?.filter(
    (movie) => movie.name === "Official Trailer",
  )[0];

  const videoId = youtubeVideo?.key;

  if (!videoId) return null;

  return (
    <div className="top-0 left-0 w-full">
      <iframe
        width="100%"
        height="800px"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainMovieVideo;
