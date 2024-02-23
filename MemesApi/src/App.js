
import React from "react";
import "./App.css";
import Header from "./Header";
import Meme from "./meme";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Meme />
    </div>
  );
}
// ==================
// import WindowTracker from "./WindowTracker";
// export default function App() {
//   const [show, setShow] = React.useState(true);
//   function toggle() {
//     setShow((prevShow) => !prevShow);
//   }

//   return (
//     <div>
//       <button onClick={toggle}>Toggle windowTracker</button>

//       {show && <WindowTracker />}
//   </div>
//   );
// }

// ====================

// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({});
//   const [count, setCount] = React.useState(0);

//   React.useEffect(
//     function () {
//       console.log("effect run");
//       fetch("https://swapi.dev/api/people/" + { count })
//         .then((res) => res.json())
//         .then((data) => setStarWarsData(data));
//     },
//     [count]
//   );

