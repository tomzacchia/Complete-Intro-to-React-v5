import React from "react";

// Parcel comes with babel

export default function Pet({ name, animal, breed }) {
  return (
    // div gets transpiled to React.createElement so we need to import React
    <div>
      <h1> {name} </h1>
      <h2> {animal} </h2>
      <h2> {breed} </h2>
    </div>
  );
}
