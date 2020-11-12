import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <h1 id="something-important"> Adopt Me! </h1>
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
