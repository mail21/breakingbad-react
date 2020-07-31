import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import CharactersGrid from "./components/CharactersGrid";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchData = await axios.get(`https://breakingbadapi.com/api/characters`);
      console.log(fetchData.data);
      setCharacters(fetchData.data);
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharactersGrid characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
