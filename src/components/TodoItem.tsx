import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faDumpster);

interface cartProp {
  id: string;
  item: string;
  total: number;
  selected: boolean;
  total2: number;
}
interface TodoItemProp {
  cart: {
    id: string;
    item: string;
    total: number;
    total2: number;
    selected: boolean;
  };
  onTotalChange: (newTotal: number) => void;
  setCarts: (value: React.SetStateAction<cartProp[]>) => void;
  totalItems: number;
  OnSetTotalItems: (value: React.SetStateAction<number>) => void;
}

const TodoItem: React.FC<TodoItemProp> = ({
  cart,
  onTotalChange,
  setCarts,
  totalItems,
  OnSetTotalItems,
}) => {
  const [count, setCount] = useState<number>(1);

  console.log(cart);

  console.log("total item is ", totalItems);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
    setCarts((prevCart) =>
      prevCart.map((prevItem) =>
        prevItem.id === cart.id
          ? { ...prevItem, total2: prevItem.total2 + 1 }
          : prevItem
      )
    );
    onTotalChange(1);
  }

  function handleDelete(id: string, total: number) {
    setCarts((prevCart) => prevCart.filter((cart) => cart.id !== id));
    OnSetTotalItems((prevTotal) => prevTotal - total);
  }

  function handleDecrement() {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
    setCarts((prevCart) =>
      prevCart.map((prevItem) =>
        prevItem.id === cart.id
          ? { ...prevItem, total2: prevItem.total2 - 1 }
          : prevItem
      )
    );
    onTotalChange(-1);
  }

  return (
    <>
      <li className="item">
        <h3>{cart.item}</h3>
        <FontAwesomeIcon
          icon={faDumpster}
          className="bin-icon"
          onClick={() => handleDelete(cart.id, cart.total2)}
        />
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
