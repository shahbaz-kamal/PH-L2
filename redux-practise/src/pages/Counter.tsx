import { Button } from "../components/ui/button";
import { decrement, increment } from "../redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-6 items-center">
      <Button
        onClick={() => dispatch(increment())}
        className="text-2xl py-6 px-6 bg-orange-600 text-black"
      >
        Increment
      </Button>
      <h3 className="text-3xl font-bold ">{count}</h3>
      <Button
        onClick={() => dispatch(decrement())}
        className="text-2xl py-6 px-6 bg-orange-600 text-black"
      >
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
