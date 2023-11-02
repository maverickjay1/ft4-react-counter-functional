import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  //state represents the current state of the Redux store. State.counter is accessing the 'counter' slice of the state. The const of 'count' holds the value of state.counter.
  const count = useSelector((state) => state.counter);
  //Assign the dispatch function to the the dispatch variable.
  const dispatch = useDispatch();

  //display the current count as well as plus and minus buttons.
  return (
    <div>
      <h1>Counter App</h1>
      {/* Count displays the current count as retrieved by useSelector for the count variable */}
      <p>Count: {count}</p>
      {/* on click of the buttons, it dispatches the increment or decrement actions defined in the counterSlice (which have been imported at top of this page)*/}
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </div>
  );
}

export default Counter;
