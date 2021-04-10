import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Movie from './Movie';

const Movies = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      <Movie movies={movies} />
    </div>
  );
};

export default Movies;
