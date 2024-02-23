import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{ background: colorValue, color: isDarkText ? "#000" : "#fff" }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p> {hexValue ? hexValue : null}</p>
    </section>
  );
};
Square.defaultProps = { colorValue: "Empty Color value" };
export default Square;
