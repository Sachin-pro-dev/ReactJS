import React from "react";
import colorNames from "colornames";
const Input = (
  {
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name: </label>
      <input
        autoFocus
        type="text"
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      ></input>
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toogle Text Color
      </button>
    </form>
  );
};

export default Input;