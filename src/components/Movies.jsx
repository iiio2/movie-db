import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import axios from 'axios';

const API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await axios.get(API);
    setMovies(res.data.results);
    // console.log(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Movie movies={movies} />
    </div>
  );
};

export default Movies;
