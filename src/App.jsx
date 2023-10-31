import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count % 10 === 0 && count > 0) {
      setMessage(`You've reached ${count}`);
    } else {
      setMessage("");
    }
  }, [count]);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <p>{message}</p>
    </div>
  );
}

export default Counter;
