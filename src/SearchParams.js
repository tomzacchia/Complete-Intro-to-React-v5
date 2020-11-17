import React, { useState, useEffect, useContext } from "react";
// import pet, { ANIMALS } from "@frontendmasters/pet";
import { default as petsApi, ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await petsApi.animals({
      location,
      breed,
      type: animal,
    });

    // if we receive no animals, set empty as a default
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    petsApi.breeds(animal).then(({ breeds: apiBreeds }) => {
      var breedStringsArr = apiBreeds.map((breedObj) => breedObj.name);

      setBreeds(breedStringsArr);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />

        <button style={{ backgroundColor: theme }}> Submit </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
