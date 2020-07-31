import React from "react";
function Search({ setInput, value }) {
  return (
    <div className="search">
      <input type="text" placeholder="Seacrh Character" value={value} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Search;
