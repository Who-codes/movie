import React, { useEffect, useState } from "react";
import axios from "../axios";
import { fetchMovie } from "../Requests";
import "../styles/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(fetchMovie.trending);
    setMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  };

  const shortDesc = (str, num) => {
    return str?.length > num ? str.substr(0, num) : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "conatin",
      }}
    >
      <div className="banner-content">
        <h1 className="title">{movie.title || movie.original_title}</h1>
        <div className="banner-description">
          {shortDesc(movie?.overview, 150)}
        </div>
        <div className="btn-container">
          <button className="banner-btn">play</button>
          <button className="banner-btn">show list</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
