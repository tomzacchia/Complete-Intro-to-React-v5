// useEffect takes place of: componentDidMOunt, ...wilMount, ...wilUpdate
import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // schedules function call to happen after component renders
  // the 2nd argument to useEffect is a list of dependencies
  // which it uses to determine if the callback should be called
  // this effect does not depend on breeds
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    // call API
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      var breedStringsArr = apiBreeds.map((breedObj) => breedObj.name);

      setBreeds(breedStringsArr);
    }, console.error);
    // same as error => console.error(error)
  }, [animal, setBreed, setBreeds]);
  // runs once pass in no dependencies

  // All of this renders first
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

        <AnimalDropdown />
        <BreedDropdown />

        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
