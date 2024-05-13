import React from "react";
import "./rowList.css";
import Row from "../Row/Row";
import requests from "../../../utlis/Requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="TopRatedMovies"
        fetchUrl={requests.fetchTopRatedMovies}
        // isLargeRow={true}
      />
      <Row
        title="ActionMovies"
        fetchUrl={requests.fetchActionMovies}
        // isLargeRow={true}
      />
      <Row
        title="ComedyMovies"
        fetchUrl={requests.fetchComedyMovies}
        // isLargeRow={true}
      />
      <Row
        title="HorrorMovies"
        fetchUrl={requests.fetchHorrorMovies}
        // isLargeRow={true}
      />
      <Row
        title="RomanceMovies"
        fetchUrl={requests.fetchRomanceMovies}
        // isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
     
    </>
  );
};

export default RowList;
