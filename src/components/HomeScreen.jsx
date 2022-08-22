import React from "react";
import { fetchMovie } from "../Requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row title={"Trending Now"} fetchUrl={fetchMovie.trending} />
      <Row title={"Action"} fetchUrl={fetchMovie.action} />
      <Row title={"Adventure"} fetchUrl={fetchMovie.adventure} />
      <Row title={"Animation"} fetchUrl={fetchMovie.animation} />
      <Row title={"Commedy"} fetchUrl={fetchMovie.commedy} />
      <Row title={"Documentries"} fetchUrl={fetchMovie.documentry} />
      <Row title={"Horror"} fetchUrl={fetchMovie.horror} />
      <Row title={"Romance"} fetchUrl={fetchMovie.romance} />
    </div>
  );
};

export default HomeScreen;
