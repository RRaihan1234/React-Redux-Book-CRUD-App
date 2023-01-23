import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

import { useDispatch, useSelector } from "react-redux"

const CounterView = () => {
    const count = useSelector((state) => state.counter12.count);

    const dispatch = useDispatch();

    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => {dispatch(increment())}}> Increment </button>
        <button onClick={() => {dispatch(decrement())}}> Decrement </button>
        <button onClick={() => {dispatch(reset())}}> Reset </button>
        <button onClick={() => {dispatch(increaseByAmount(5))}}> increaseByAmount </button>
      </div>
    );
  };

  export default CounterView;