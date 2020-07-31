import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import CharactersGrid from "./components/CharactersGrid";
import Quote from "./components/Quote";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const fetchData = await axios.get(`https://breakingbadapi.com/api/characters?name=${input}`);
      setCharacters(fetchData.data);
      setIsLoading(false);
    };
    fetchApi();
  }, [input]);

  useEffect(() => {
    const fetchQuote = async () => {
      const fetchDataQuote = await axios.get(`https://breakingbadapi.com/api/quote/random`);
      console.log(fetchDataQuote.data[0]);
      setQuote(fetchDataQuote.data[0]);
    };
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <Header />
      <Quote quote={quote.quote} author={quote.author} />
      <br />
      <Search setInput={setInput} value={input} />
      <CharactersGrid characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
