import React, { useState } from "react";
// parcel will automatically download dependencies that are missing
// check package.json
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // [currentState, updater function state] = useState(defaultState)
  // useState returns an array where arr[0] = state
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog");
  // const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  // IMPORTANT: Order of hooks is important to functionality of hooks
  // therefore do not place them in conditionals

  return (
    <div className="search-params">
      <form>
        {/* input inside label is good for accessibility */}
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            // typing triggers a re-render of SearchParams
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        {/* 
              With key we notify react that if we re-order the option components
              it can compare which items have changed, are added or are removed.
              This helps with performance
        */}
        {/* <label htmlFor="animal">
          Animal
          <select
            name=""
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            onBlur={(event) => setAnimal(event.target.value)}
          >
            <option value="all"> ALL </option>
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label> */}
        <AnimalDropdown />
        <BreedDropdown />
        {/* <label htmlFor="breed">
          Breed
          <select
            name=""
            id="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            onBlur={(event) => setBreed(event.target.value)}
            disabled={!breeds.length}
          >
            <option value="all">All</option>
            {breeds.map((breedString) => (
              <option value={breedString} key={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label> */}
        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
