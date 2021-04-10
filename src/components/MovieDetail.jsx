import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API = `?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`;

const config = 'https://image.tmdb.org/t/p/';

const MovieDetail = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const getMovie = async () => {
    try {
      const res = await axios.get(BASE_URL + params.id + API);
      setMovie(res.data);
      setLoading(false);
    } catch (error) {
      if (error) {
        alert('Error occured');
        return;
      }
    }
  };

  useEffect(() => {
    getMovie();
    return () => {
      setMovie('');
    };
    // eslint-disable-next-line
  }, []);

  //if (loading) return null;
  if (!movie) return null;

  return (
    <div className='main'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img
            className='img-fluid'
            style={{ height: '400px', width: '100%' }}
            src={config + 'original' + movie.backdrop_path}
            alt={movie.title}
          />
          <div className='container mt-4'>
            <div className='row justify-content-around'>
              <div className='col-sm-3'>
                <img
                  className='img-fluid'
                  style={{ height: '250px' }}
                  src={config + 'w500' + movie.poster_path}
                  alt={movie.title}
                />
              </div>

              <div className='col-sm-9'>
                <h3 className='display-4'>{movie.title}</h3>
                <p className='lead'>{movie.overview}</p>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
