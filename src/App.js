import React, { useEffect, useState } from "react";
import MovieDetails from "./component/MovieDetails";
import Movies from "./component/Movies";
import SearchBox from "./component/SearchBox";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [Search, setSearch] = useState("");
  const [show, setShow] = useState(true);
  const [item, setItem] = useState("");

  async function getMovies() {
    const movieData = await fetch(
      "https://www.omdbapi.com/?s=" + Search + "&apikey=56e7f9dc"
    );
    return movieData.json();
  }

  useEffect(() => {
    getMovies().then((data) => {
      if (data.Search) {
        setMovies(data.Search);
      }
    });
  }, [Search]);

  console.log(item);

  return (
    <>
      <h1>Movies Search App</h1>
      <div className="container">
        <div className="card">
          {item ? (
            <div className="table">
              <button onClick={() => setItem("")}>x</button>
              <MovieDetails item={item}></MovieDetails>
            </div>
          ) : (
            <SearchBox
              setMovies={setMovies}
              getMovies={getMovies}
              setShow={setShow}
              setSearch={setSearch}
              Search={Search}
            ></SearchBox>
          )}

          {show && !item ? (
            <div className="content">
              <Movies movies={movies} setItem={setItem}></Movies>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
