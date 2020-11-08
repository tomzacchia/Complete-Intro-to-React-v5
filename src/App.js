import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // React.createElement( type, [props],[...children])
  return React.createElement("div", { id: "unique_id" }, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "CeeCee",
      animal: "Dog",
      breed: "Black Cur",
    }),
    React.createElement(Pet, {
      name: "Deegan",
      animal: "Dog",
      breed: "Black Lab",
    }),
    React.createElement(Pet, {
      name: "Peaches",
      animal: "Cat",
      breed: "Funny Cat",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
