import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavLink, Link, Outlet } from 'react-router-dom';


const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            language: 'en-US'
          },
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTllMDAxZjNmOTMyZDM1M2MyOWZhZmE2NGY2OWY3ZSIsInN1YiI6IjY0ZTBjN2Y1MzcxMDk3MDBmZmJhNDhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huWKRRRM3nfIfTEIgc0Hxk4hUE_lvJVFzXYsi-KttIc'
          }
        });
        setMovieData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button>&#8592; <NavLink to='/' className='ButtonGoBack'>Go back</NavLink></button>
      <div className='Movie'> <img src={`https://image.tmdb.org/t/p/w200/${movieData.backdrop_path}`} alt={movieData.title}
      width='200'
      height='300'/>
      <div>
      <h2>{movieData.title}</h2>
      <p>User Score:  {Math.round(movieData.vote_average * 10)}%</p>
      <b>Overview</b>
      <p> {movieData.overview}</p>
      <b>Genres</b>
      <p> {movieData.genres.map(genre => genre.name).join(', ')}</p>
    </div>
      </div>

      <ul className='listCastAndReview'> 
        <li className='titleForCastAndReview'>Additional information</li>
        <li><Link to='cast'>Cast</Link></li>
        <li><Link to='reviews'>Review</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default MoviesDetails;