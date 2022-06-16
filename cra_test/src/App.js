import { useEffect, useState } from "react";

const moveiUri = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year';


function App() {
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
        <div>{movies.map((item)=><div key={item.id}>{item.title}</div>)}</div>}
    </div>
  );
}

export default App;