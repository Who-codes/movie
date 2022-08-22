import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/Row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const fetchData = async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  };

  const element = movies?.map((movie) => (
    <div key={movie.id} className="row-content">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={title}
      />
    </div>
  ));

  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row-component">{element}</div>
    </div>
  );
};

export default Row;
