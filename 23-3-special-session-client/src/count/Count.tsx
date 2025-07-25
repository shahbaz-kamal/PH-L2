import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = (value: number) => {
    setCount(count + value);
  };
  const handleDecrement = (value: number) => {
    setCount(count - value);
  };
  return (
    <div className="space-x-2 space-y-3">
      <div className="text-4xl text-center">{count}</div>
      <Button
        onClick={() => {
          handleIncrement(2);
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          handleDecrement(2);
        }}
      >
        Decrement
      </Button>
    </div>
  );
};

export default Count;
