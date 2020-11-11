import React, { useState } from "react";
// parcel will automatically download dependencies that are missing
// check package.json
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // [currentState, updater function state] = useState(defaultState)
  // useState returns an array where arr[0] = state
  const [location, setLocation] = useState("Seattle, WA");

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
        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
