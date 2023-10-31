import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}

export default Counter;

// import { React, useState } from "react";

// export default function App() {
//   const [counter, setCounter] = useState(0);

//   //increase counter
//   const increase = () => {
//     setCounter((count) => count + 1);
//   };

//   //decrease counter
//   const decrease = () => {
//     setCounter((count) => count - 1);
//   };

//   //reset counter
//   const reset = () => {
//     setCounter(0);
//   };

//   return (
//     <div className="counter">
//       <h1>React Counter</h1>
//       <span className="counter__output">{counter}</span>
//       <div className="btn__container">
//         <button className="control__btn" onClick={increase}>
//           +
//         </button>
//         <button className="control__btn" onClick={decrease}>
//           -
//         </button>
//         <button className="reset" onClick={reset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }
