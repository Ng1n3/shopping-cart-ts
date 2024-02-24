import React, { useState } from "react";

interface TodoItemProp {
  cart: {
    id: string;
    item: string;
    total: number;
    selected: boolean;
  };
  onTotalChange: (newTotal: number) => void;
}

const TodoItem: React.FC<TodoItemProp> = ({ cart, onTotalChange }) => {
  const [count, setCount] = useState<number>(1);

  // console.log(cart);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
    onTotalChange(1);
  }

  function handleDecrement() {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
    onTotalChange(-1)
  }

  return (
    <>
      <li className="item">
        <h3>{cart.item}</h3>
        <div>
          <button onClick={handleDecrement}> - </button>
          <span> {count} </span>
          <button onClick={handleIncrement}> + </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
