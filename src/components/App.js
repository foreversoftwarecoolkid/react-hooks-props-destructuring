import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const movieData = {
    title: "Inception",
    genres: ["Action", "Adventure", "Sci-Fi"],
  };

  return (
    <div className="App">
      <MovieCard title={movieData.title} genres={movieData.genres} />
    </div>
  );
}

export default App;
