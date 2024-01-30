import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import requests from '../utils/requests';
import './Banner.css'

const Banner = () => {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.NetflixOrginal);
        // console.log(request)
        setmovie(
          request?.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        return request;
      }
      fetchData();
    }, []);
    function truncate(str, n){
        return str?.length>n?str.substr(0, n-1)+'.....': str;
      }
    return (
        <header
          className="banner object-fit-cover w-full h-full object-cover object-top bg-gradient-to-r from-black pt-1 "
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: " top center no-repeat",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title text-2xl md:text-4xl">
              {movie?.title || movie?.name || movie.original_name}
            </h1>
            <div className="banner__buttons font-medium">
              <button className="banner__button  border-none bg-gray-300 text-[#000] py-2 px-6">Play</button>
              <button className="banner__button border-none  py-2 px-6 ml-4 "  >My List</button>
            </div>
            <p>{movie?.release_date}</p>
            <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
          </div>
          <div className="banner__fadeBotton" />
        </header>
      );
}

export default Banner
