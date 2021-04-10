import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const result = await axios.get(API);
      setMovies(result.data.results);
    } catch (error) {
      if (error) {
        alert('Error occured');
        return;
      }
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
