import React, { useEffect, useState } from "react";
import "./row.css";
import movieTrailer from "movie-trailer";
import youTube from "react-youtube";
import axios from "../../../utlis/axios";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);

  const[trailerUrl,settrailerUrl]=useState("")

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, [fetchUrl]);

    const handleClick = (movie) => {
      if (trailerUrl) {settrailerUrl('')

      } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name).then((url) => {
          console.log(url)
          const urlparams = new URLSearchParams(new URL(url).search)
          console.log(urlparams)
          console.log(urlparams.get('v'))
         settrailerUrl(urlparams.get("v"));
      })

    }
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, i) => (
          <img
            onclick={()=>handleClick(movie)}
            key={i}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div
        style={{
          padding: "40px",
        }}>
        {trailerUrl && <youTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
