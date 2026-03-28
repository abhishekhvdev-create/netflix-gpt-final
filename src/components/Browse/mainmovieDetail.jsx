const MainMovieDetail = ({ topMovie }) => {
  if (!topMovie) return;
  return (
    <>
      <div className="text-white absolute top-60 mx-15">
        <p className="text-2xl font-bold">{topMovie?.original_title}</p>
        <p className="w-150 my-2">{topMovie.overview}</p>
        <button className="bg-white text-black px-4 py-2 rounded-xl">
          ✅ Play
        </button>
        <button className="bg-gray-600 px-4 py-2 rounded-xl mx-2">
          ℹ️ More Info
        </button>
      </div>
    </>
  );
};

export default MainMovieDetail;
