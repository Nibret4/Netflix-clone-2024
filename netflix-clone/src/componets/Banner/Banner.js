import React, { useEffect, useState } from "react";
import axios from "../../utlis/Axios";
import requests from "../../utlis/Requests";
import "./banner.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const Banner = () => {
  const [movie, setmovie] = useState({});
  // useEffect(() => {
  //     (async () => {
  //         try {
  //             const request = await axios.get(requests.fetchNetflixoriginals)
  //             // console.log(requests)
  //             setmovie(request.data.requests[Math.floor(Math.random() * request.data.requests.length)]);
  //         } catch (err) {
  //             console.log('err', err)
  //         }
  //     })
  // }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url---`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_button">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_discription">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};
export default Banner;
