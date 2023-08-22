import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryParamSearch = queryParams.get('search');

    if (queryParamSearch) {
      setSearchQuery(queryParamSearch);
      handleSearch(queryParamSearch);
    }
  }, [location.search]);

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      return;
    }

    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          query: query,
          language: 'en-US',
          page: 1,
          include_adult: false,
          api_key: '699e001f3f932d353c29fafa64f69f7e'
        }
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/movies?search=${searchQuery}`);
  };

  return (
    <div className='Search'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}?search=${searchQuery}`}>
              {movie.title} ({movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;