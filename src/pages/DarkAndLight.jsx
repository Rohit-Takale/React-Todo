import React, { useState } from "react";
import Blog from "./Blog";

import { ThemeContext,themes } from "../context/theme-context";

const DarkAndLight = () => {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = () => {
    console.log(theme);
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <Blog />
    </ThemeContext.Provider>
  );
};

export default DarkAndLight;
