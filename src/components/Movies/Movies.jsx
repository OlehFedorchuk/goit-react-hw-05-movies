import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      return;
    }

    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          query: searchQuery,
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

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} ({movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;