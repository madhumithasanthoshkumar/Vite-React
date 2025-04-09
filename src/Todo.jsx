import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./storeredux";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{backgroundColor:"rosybrown",
width:"1500px",
height:"1000px",
textAlign:"center"
    }}>
      <div>Count:{count}</div>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      
    </div>
  );
};

export default Todo;


 
