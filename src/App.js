import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        {/* 
          compiled to anchor tag, together Link will 
          handle routing mechanisms 
        */}
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        {/* 
          - Reach router only renders what matches "the most" 
          - Order declaration of routes does not matter
        */}
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
