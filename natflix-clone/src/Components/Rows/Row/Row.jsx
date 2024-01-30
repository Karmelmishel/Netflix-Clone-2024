import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import './Row.css'
import movieTrailer from "movie-trailer"
import YouTube from 'react-youtube'
const base_url = "https://image.tmdb.org/t/p/original/"
const Row = ({title, ferchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl]= useState('')

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(ferchUrl);
        // console.log(request)
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }, [ferchUrl]);
  //   console.log(movies);
  const handelClick = (movie)=>{
    if(trailerUrl){
        setTrailerUrl('')
    }else{
        movieTrailer(movie?.title || movie?.orginal_name || movie?.name)
        .then((url)=>{
const urlParams = new URLSearchParams(new URL(url).search)
console.log(url)
console.log(urlParams)
setTrailerUrl(urlParams.get('v'))
        })
    }
  }
  const opts ={
    height: '390',
    width: '100%',
    playerVars: {autoplay: 1,},
  }
  
    return (
      <div className="row">
        <h1 className=' text-lg font-serif'>{title}</h1>
       
        <div className="row__posters">
          {movies?.map((movie, i) => {
              let img= (<img onClick={()=>handelClick(movie)} key={i} className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              
            />)
            return img
          })}
          
        </div>
        <div style={{paddind: '40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
      </div>
    );
}

export default Row
