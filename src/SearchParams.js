import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";

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
          />
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
