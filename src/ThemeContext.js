import { createContext } from "react";

// createContext can accept a variety of data types
// here we pass it a "hook" styled array where the 1st argument
// is the default value and the 2nd is the updater function
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
