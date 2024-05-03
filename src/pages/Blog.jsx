import React, { useContext } from "react";
import Button from "../components/Button";
import { ThemeContext } from "../context/theme-context";

const Blog = () => {

const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <>
      <div className="p-10">
        <span className="absolute top-10 right-10">
          <Button title={theme} btnClass={""} onClick={changeTheme} />
        </span>
        Toggling Between The Dark And The Light Theme and <br /> this is {theme}{" "}
        theme.

        <input type="range" name="" id="" />
      </div>
    </>
  );
};

export default Blog;
