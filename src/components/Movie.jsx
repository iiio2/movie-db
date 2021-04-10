import { Link } from 'react-router-dom';

const config = 'https://image.tmdb.org/t/p/';

const Movie = ({ movies }) => {
  return (
    <div className='row'>
      {movies.map((movie) => (
        <div className='col-sm-3 my-2 movie' key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              className='img-fluid'
              src={config + 'w500' + movie.poster_path}
              alt={movie.title}
            />
            <h4 style={{ color: '#d63031' }} className='text-center'>
              {movie.title}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movie;
