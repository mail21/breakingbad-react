import React from "react";
import Card from "./Card";
import spinner from "./../image/spinner.gif";

function CharactersGrid({ characters, isLoading }) {
  return isLoading ? (
    <div className="center">
      <img src={spinner} alt="spinner" width="100" />
    </div>
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </section>
  );
}

export default CharactersGrid;
