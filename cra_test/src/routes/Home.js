import { useEffect, useState } from "react";
import Movie from "../components/movie";

const moveiUri = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(moveiUri);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);
  console.log(movies);

  return (
    <div>
      <h1>Movies Intro ({movies.length})</h1>
      {loading ? <strong>Loding...</strong> : 
        <div>{movies.map((movie) => (
          <Movie key={movie.id}
                 medium_cover_image={movie.medium_cover_image}
                 title={movie.title}
                 summary={movie.summary}
                 genres={movie.genres}
          />
          ))}
        </div>}
    </div>
  );
}

export default Home;
