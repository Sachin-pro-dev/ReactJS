import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <div
        value={color}
        className="color-box"
        style={{
          background: `${color}`,
          // boxShadow: color ? `3px 3px 100px 50px ${color}` : true,
        }}
      ></div>
      <input
        onChange={(e) => setColor(e.target.value)}
        className="color-input"
        placeholder="Enter the color here..."
        type="text"
      ></input>
    </div>
  );
}

export default App;
