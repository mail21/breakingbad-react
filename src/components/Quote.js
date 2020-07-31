import React from "react";
function Quote({ quote, author }) {
  return (
    <div className="center" style={{ flexDirection: "column" }}>
      <h2>
        <i>{quote}</i>
      </h2>
      <h3>
        <i>
          <b>{author}</b>
        </i>
      </h3>
    </div>
  );
}

export default Quote;
