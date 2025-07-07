import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <div>{count}</div>

      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
