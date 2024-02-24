import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [name, setName] = useState<string>("");
  const [carts, setCarts] = useState<cartProp[]>([]);

  interface cartProp {
    id: string;
    item: string;
    total: number;
    selected: boolean;
  }

  function handleAddCart(cart: cartProp) {
    setCarts((prevCart: cartProp[]) => [...prevCart, cart]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newCart: cartProp = {
      id: uuid(),
      item: name,
      total: 1,
      selected: false,
    };

    console.log(newCart);
    handleAddCart(newCart);
    setName("");
  }

  return (
    <>
      <h1> QUICK SHOPING CART</h1>
      <div className="Todo">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add an item to your list"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {carts.map((cart) => (
            <TodoItem cart={cart} key={cart.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
