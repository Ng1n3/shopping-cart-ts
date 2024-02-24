import React, { useState } from "react";

interface TodoItemProp {
  cart: {
    id: string;
    item: string;
    total: number;
    selected: boolean;
  };
}

const TodoItem: React.FC<TodoItemProp> = ({ cart }) => {
  const [count, setCount] = useState<number>(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
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
