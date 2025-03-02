import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      console.log("requesting data...");
      const response = await axios.request(API_OPTIONS);
      console.log("loading...", response);
    } catch (error) {
      console.log("Error fetching the movies:", error);
      setErrorMessage("Error fetching movies. Please try again later.");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper items-center">
        <img src="./hero.png" alt="Hero Banner" />
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2>All Movies</h2>
        </section>
      </div>
    </main>
  );
};

export default App;
//d406f9857213a77d6d84c6e77c828d43
