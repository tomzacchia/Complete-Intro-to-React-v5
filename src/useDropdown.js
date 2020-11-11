import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  var [state, setState] = useState(defaultState);

  var id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  var Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(event) => setState(event.target.value)}
        onBlur={(event) => setState(event.target.value)}
        disabled={options.length === 0}
      ></select>
      <option value="all">ALL</option>
      {options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
