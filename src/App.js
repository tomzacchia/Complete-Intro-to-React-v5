import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important"> Adopt Me! </h1>

      <Pet name="Luna" animal="Dog" breed="Black Cur" />
      <Pet name="Deegan" animal="Dog" breed="Black Lab" />
      <Pet name="Peaches" animal="Cat" breed="Some Cat" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
