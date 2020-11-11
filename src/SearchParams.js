import React, { useState } from "react";
// parcel will automatically download dependencies that are missing
// check package.json
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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
